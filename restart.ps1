# YakalaHadi Yeniden Başlatma Script'i

Write-Host "==========================================" -ForegroundColor Magenta
Write-Host "    YakalaHadi Uygulaması Yeniden Başlatılıyor" -ForegroundColor Magenta
Write-Host "==========================================" -ForegroundColor Magenta

# 1. Uygulamayı durdur
Write-Host "`n[1/4] Uygulama durduruluyor..." -ForegroundColor Yellow
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($processes) {
    foreach ($process in $processes) {
        Stop-Process -Id $process.Id -Force
    }
    Write-Host "   Uygulama durduruldu!" -ForegroundColor Green
} else {
    Write-Host "   Çalışan uygulama bulunamadı." -ForegroundColor Yellow
}

# 2. Kısa bekleme
Write-Host "`n[2/4] Sistem temizleniyor..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

# 3. Build kontrol et
Write-Host "`n[3/4] Build kontrol ediliyor..." -ForegroundColor Yellow
if (!(Test-Path ".next")) {
    Write-Host "   Build bulunamadı, build yapılıyor..." -ForegroundColor Yellow
    npm run build
    Write-Host "   Build tamamlandı!" -ForegroundColor Green
} else {
    Write-Host "   Build mevcut!" -ForegroundColor Green
}

# 4. Uygulamayı arka planda başlat
Write-Host "`n[4/4] Uygulama arka planda yeniden başlatılıyor..." -ForegroundColor Yellow
Start-Process -FilePath "cmd" -ArgumentList "/c", "npm run start" -WindowStyle Hidden -PassThru

# Kısa bekleme
Start-Sleep -Seconds 3

# Durumu kontrol et
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue
$port80 = netstat -an | findstr ":80" | findstr "LISTENING"

if ($processes -and $port80) {
    Write-Host "`n✅ Uygulama başarıyla arka planda çalışıyor!" -ForegroundColor Green
    Write-Host "🌐 http://localhost:80" -ForegroundColor Cyan
    Write-Host "🌐 yakalahadi.com" -ForegroundColor Cyan
    Write-Host "`n💡 PowerShell kapatabilirsiniz, uygulama çalışmaya devam edecek!" -ForegroundColor Yellow
} else {
    Write-Host "`n❌ Uygulama başlatılamadı!" -ForegroundColor Red
}

Write-Host "==========================================" -ForegroundColor Magenta

