# YakalaHadi Başlatma Script'i

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "    YakalaHadi Uygulaması Başlatılıyor" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Eski process'leri temizle
Write-Host "`n[1/3] Eski process'ler temizleniyor..." -ForegroundColor Yellow
taskkill /IM node.exe /F 2>$null

# Build kontrol et
Write-Host "`n[2/3] Build kontrol ediliyor..." -ForegroundColor Yellow
if (!(Test-Path ".next")) {
    Write-Host "   Build bulunamadı, build yapılıyor..." -ForegroundColor Yellow
    npm run build
    Write-Host "   Build tamamlandı!" -ForegroundColor Green
} else {
    Write-Host "   Build mevcut!" -ForegroundColor Green
}

# Uygulamayı arka planda başlat
Write-Host "`n[3/3] Uygulama arka planda başlatılıyor..." -ForegroundColor Yellow
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

Write-Host "==========================================" -ForegroundColor Cyan
