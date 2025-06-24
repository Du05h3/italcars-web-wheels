
#!/bin/bash

# ITALCARS Update Script
# Usage: ./update.sh

set -e

PROJECT_NAME="italcars"

echo "🔄 Starting update of ITALCARS website..."

# Pull latest changes (if using git)
if [ -d ".git" ]; then
    echo "📥 Pulling latest changes from repository..."
    git pull origin main || git pull origin master
fi

# Backup current version
echo "💾 Creating backup..."
docker tag ${PROJECT_NAME}-web:latest ${PROJECT_NAME}-web:backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true

# Rebuild and deploy with zero-downtime
echo "🔨 Building new version..."
docker-compose build --no-cache

echo "🔄 Rolling update (zero-downtime)..."
docker-compose up -d

# Wait for new container to be ready
echo "⏳ Waiting for new version to be ready..."
sleep 15

# Health check
if curl -f http://localhost/health > /dev/null 2>&1; then
    echo "✅ Update successful!"
    
    # Clean up old images (keep last 3 versions)
    echo "🧹 Cleaning up old images..."
    docker images ${PROJECT_NAME}-web --format "table {{.Repository}}\t{{.Tag}}\t{{.ID}}" | grep -v "latest\|backup" | tail -n +4 | awk '{print $3}' | xargs -r docker rmi 2>/dev/null || true
    
    echo "🎉 ITALCARS website updated successfully!"
else
    echo "❌ Update failed. Rolling back..."
    docker tag ${PROJECT_NAME}-web:backup ${PROJECT_NAME}-web:latest
    docker-compose up -d
    echo "🔙 Rollback completed. Please check the logs."
    exit 1
fi

# Show status
docker-compose ps
