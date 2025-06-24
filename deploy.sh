
#!/bin/bash

# ITALCARS Deploy Script for Ubuntu Server
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="italcars"
COMPOSE_FILE="docker-compose.yml"

echo "🚀 Starting deployment of ITALCARS website..."
echo "Environment: $ENVIRONMENT"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Run: curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh"
    exit 1
fi

# Check if Docker Compose is installed
if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "Run: sudo apt install docker-compose-plugin"
    exit 1
fi

# Create logs directory
mkdir -p logs

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose -f $COMPOSE_FILE down --remove-orphans || true

# Remove old images (optional - uncomment if you want to force rebuild)
# echo "🗑️  Removing old images..."
# docker rmi $(docker images -q $PROJECT_NAME* 2>/dev/null) 2>/dev/null || true

# Build and start containers
echo "🔨 Building and starting containers..."
docker compose -f $COMPOSE_FILE up --build -d

# Wait for container to be ready
echo "⏳ Waiting for container to be ready..."
sleep 10

# Health check
if curl -f http://localhost/health > /dev/null 2>&1; then
    echo "✅ Deployment successful! Website is running at:"
    echo "   Local: http://localhost"
    echo "   Server IP: http://$(hostname -I | awk '{print $1}')"
else
    echo "❌ Health check failed. Checking logs..."
    docker compose logs --tail=20
    exit 1
fi

# Show running containers
echo "📊 Running containers:"
docker compose ps

# Show useful commands
echo ""
echo "📋 Useful commands:"
echo "   View logs: docker compose logs -f"
echo "   Stop: docker compose down"
echo "   Restart: docker compose restart"
echo "   Update: ./update.sh"
echo ""
echo "🎉 ITALCARS website deployed successfully!"
