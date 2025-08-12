# YakalaHadi Deployment Script'i

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "    YakalaHadi Deployment" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Eski process'leri temizle
Write-Host "`n[1/3] Eski process'ler temizleniyor..." -ForegroundColor Yellow
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($processes) {
    foreach ($process in $processes) {
        Stop-Process -Id $process.Id -Force
    }
    Write-Host "   Eski process'ler temizlendi!" -ForegroundColor Green
} else {
    Write-Host "   Çalışan process bulunamadı." -ForegroundColor Yellow
}

# 2. Build yap
Write-Host "`n[2/3] Production build yapılıyor..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "   Build başarılı!" -ForegroundColor Green
} catch {
    Write-Host "   Build hatası!" -ForegroundColor Red
    exit 1
}

# 3. Uygulamayı arka planda başlat
Write-Host "`n[3/3] Uygulama arka planda başlatılıyor..." -ForegroundColor Yellow
Start-Process -FilePath "cmd" -ArgumentList "/c", "npm run start" -WindowStyle Hidden -PassThru

# Kısa bekleme
Start-Sleep -Seconds 3

# Durumu kontrol et
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue
$port80 = netstat -an | findstr ":80" | findstr "LISTENING"

if ($processes -and $port80) {
    Write-Host "`n✅ Deployment başarılı! Uygulama arka planda çalışıyor!" -ForegroundColor Green
    Write-Host "🌐 http://localhost:80" -ForegroundColor Cyan
    Write-Host "🌐 yakalahadi.com" -ForegroundColor Cyan
    Write-Host "`n💡 PowerShell kapatabilirsiniz, uygulama çalışmaya devam edecek!" -ForegroundColor Yellow
} else {
    Write-Host "`n❌ Deployment başarısız!" -ForegroundColor Red
}

Write-Host "==========================================" -ForegroundColor Cyan
