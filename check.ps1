# YakalaHadi Durum Kontrol

Write-Host "==========================================" -ForegroundColor Blue
Write-Host "    YakalaHadi Durum Kontrol" -ForegroundColor Blue
Write-Host "==========================================" -ForegroundColor Blue

# Node.js process kontrol
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($processes) {
    Write-Host "Node.js: CALISIYOR ($($processes.Count) process)" -ForegroundColor Green
} else {
    Write-Host "Node.js: CALISMIYOR" -ForegroundColor Red
}

# Port 80 kontrol
$port80 = netstat -an | findstr ":80" | findstr "LISTENING"
if ($port80) {
    Write-Host "Port 80: AKTIF" -ForegroundColor Green
} else {
    Write-Host "Port 80: PASIF" -ForegroundColor Red
}

# Build kontrol
if (Test-Path ".next") {
    Write-Host "Build: MEVCUT" -ForegroundColor Green
} else {
    Write-Host "Build: YOK" -ForegroundColor Red
}

Write-Host "==========================================" -ForegroundColor Blue
