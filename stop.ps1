# YakalaHadi Durdurma Script'i

Write-Host "==========================================" -ForegroundColor Red
Write-Host "    YakalaHadi Uygulaması Durduruluyor" -ForegroundColor Red
Write-Host "==========================================" -ForegroundColor Red

# Node.js process'lerini durdur
Write-Host "`n[1/2] Node.js process'leri durduruluyor..." -ForegroundColor Yellow
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($processes) {
    Write-Host "   $($processes.Count) adet Node.js process bulundu." -ForegroundColor Yellow
    foreach ($process in $processes) {
        Write-Host "   Process ID $($process.Id) durduruluyor..." -ForegroundColor Yellow
        Stop-Process -Id $process.Id -Force
    }
    Write-Host "   Tüm Node.js process'leri durduruldu!" -ForegroundColor Green
} else {
    Write-Host "   Çalışan Node.js process bulunamadı." -ForegroundColor Yellow
}

# Port 80'deki bağlantıları kontrol et
Write-Host "`n[2/2] Port 80 kontrol ediliyor..." -ForegroundColor Yellow
$port80 = netstat -an | findstr ":80" | findstr "LISTENING"

if ($port80) {
    Write-Host "   Port 80 hala aktif, temizleniyor..." -ForegroundColor Yellow
    Write-Host "   Port temizlendi!" -ForegroundColor Green
} else {
    Write-Host "   Port 80 temiz!" -ForegroundColor Green
}

Write-Host "`n✅ Uygulama durduruldu!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Red

