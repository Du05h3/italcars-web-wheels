
# ITALCARS - Instrukcja wdrożenia Docker na Ubuntu Server

## Wymagania systemowe

- Ubuntu Server 20.04+ (lub inna dystrybucja Linux)
- Docker 20.10+
- Docker Compose 2.0+
- 2GB RAM (minimum)
- 10GB miejsca na dysku
- Dostęp do internetu

## 1. Instalacja Docker na Ubuntu Server

```bash
# Aktualizacja systemu
sudo apt update && sudo apt upgrade -y

# Instalacja Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Dodanie użytkownika do grupy docker
sudo usermod -aG docker $USER

# Instalacja Docker Compose
sudo apt install docker-compose-plugin

# Restart sesji (lub wyloguj się i zaloguj ponownie)
newgrp docker
```

## 2. Przygotowanie projektu

```bash
# Sklonuj projekt (jeśli używasz Git)
git clone <YOUR_REPOSITORY_URL>
cd italcars-website

# Lub skopiuj pliki na serwer
# scp -r ./* user@server:/path/to/project/
```

## 3. Konfiguracja firewall (opcjonalnie)

```bash
# Konfiguracja UFW
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS (w przyszłości)
sudo ufw --force enable
```

## 4. Wdrożenie aplikacji

```bash
# Nadaj uprawnienia wykonywania skryptom
chmod +x deploy.sh update.sh

# Wdróż aplikację
./deploy.sh
```

## 5. Weryfikacja działania

```bash
# Sprawdź status kontenerów
docker-compose ps

# Sprawdź logi
docker-compose logs -f

# Test w przeglądarce
curl http://localhost
curl http://$(hostname -I | awk '{print $1}')
```

## 6. Zarządzanie aplikacją

### Podstawowe komendy:

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Restart
docker-compose restart

# Wyświetl logi
docker-compose logs -f

# Aktualizacja
./update.sh
```

### Monitorowanie:

```bash
# Status kontenerów
docker-compose ps

# Użycie zasobów
docker stats

# Logi Nginx
tail -f logs/access.log
tail -f logs/error.log
```

## 7. Konfiguracja domeny (opcjonalnie)

### A. Konfiguracja DNS
Ustaw rekord A w DNS swojej domeny na adres IP serwera.

### B. SSL/HTTPS z Let's Encrypt
```bash
# Instalacja Certbot
sudo apt install certbot

# Wygenerowanie certyfikatu
sudo certbot certonly --webroot -w /path/to/project -d yourdomain.com

# Aktualizacja docker-compose.yml (dodanie volumów SSL)
# Restart aplikacji
docker-compose down && docker-compose up -d
```

## 8. Automatyczne uruchamianie

```bash
# Dodaj do crontab dla automatycznego startu po reboot
crontab -e

# Dodaj linię:
@reboot cd /path/to/project && docker-compose up -d
```

## 9. Backup i przywracanie

```bash
# Backup obrazów Docker
docker save italcars-web:latest | gzip > italcars-backup.tar.gz

# Przywracanie
gunzip -c italcars-backup.tar.gz | docker load
```

## 10. Rozwiązywanie problemów

### Sprawdzenie portów:
```bash
sudo netstat -tlnp | grep :80
```

### Sprawdzenie logów Docker:
```bash
docker-compose logs --tail=50
```

### Restart Docker daemon:
```bash
sudo systemctl restart docker
```

## Wsparcie

W przypadku problemów:
1. Sprawdź logi: `docker-compose logs`
2. Sprawdź status: `docker-compose ps`
3. Zrestartuj aplikację: `docker-compose restart`

## Struktura plików

```
italcars-website/
├── Dockerfile              # Definicja obrazu Docker
├── docker-compose.yml      # Orkiestracja kontenerów
├── nginx.conf              # Konfiguracja Nginx
├── deploy.sh               # Skrypt wdrożenia
├── update.sh               # Skrypt aktualizacji
├── .dockerignore           # Pliki ignorowane przez Docker
├── logs/                   # Logi Nginx
└── src/                    # Kod źródłowy aplikacji
```

## Wydajność

Aplikacja powinna działać płynnie na serwerze z:
- 1 CPU core
- 1GB RAM
- Szybkie połączenie internetowe

Dla większego ruchu zaleca się:
- 2+ CPU cores
- 2GB+ RAM
- SSD storage
