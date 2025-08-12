# YakalaHadi Durum Kontrol Script'i

Write-Host "==========================================" -ForegroundColor Blue
Write-Host "    YakalaHadi Uygulama Durumu" -ForegroundColor Blue
Write-Host "==========================================" -ForegroundColor Blue

# Node.js process'lerini kontrol et
Write-Host "`n[1/3] Node.js Process'leri:" -ForegroundColor Yellow
$processes = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($processes) {
    Write-Host "   ✅ $($processes.Count) adet Node.js process çalışıyor" -ForegroundColor Green
    foreach ($process in $processes) {
        Write-Host "   - Process ID: $($process.Id), Memory: $([math]::Round($process.WorkingSet64/1MB, 1)) MB" -ForegroundColor Cyan
    }
} else {
    Write-Host "   ❌ Çalışan Node.js process bulunamadı" -ForegroundColor Red
}

# Port 80 kontrol et
Write-Host "`n[2/3] Port 80 Durumu:" -ForegroundColor Yellow
$port80 = netstat -an | findstr ":80" | findstr "LISTENING"

if ($port80) {
    Write-Host "   ✅ Port 80 aktif" -ForegroundColor Green
    Write-Host "   - $port80" -ForegroundColor Cyan
} else {
    Write-Host "   ❌ Port 80 pasif" -ForegroundColor Red
}

# Build durumu kontrol et
Write-Host "`n[3/3] Build Durumu:" -ForegroundColor Yellow
if (Test-Path ".next") {
    Write-Host "   ✅ Build mevcut" -ForegroundColor Green
    $buildTime = (Get-Item ".next").LastWriteTime
    Write-Host "   - Son build: $buildTime" -ForegroundColor Cyan
} else {
    Write-Host "   ❌ Build bulunamadı" -ForegroundColor Red
}

# Genel durum
Write-Host "`n📊 Genel Durum:" -ForegroundColor Yellow
if ($processes -and $port80 -and (Test-Path ".next")) {
    Write-Host "   🟢 Uygulama tamamen çalışıyor!" -ForegroundColor Green
    Write-Host "   🌐 http://localhost:80" -ForegroundColor Cyan
    Write-Host "   🌐 yakalahadi.com" -ForegroundColor Cyan
} else {
    Write-Host "   🔴 Uygulama çalışmıyor!" -ForegroundColor Red
    Write-Host "   💡 Uygulamayı başlatmak için: .\start.ps1" -ForegroundColor Yellow
}

Write-Host "==========================================" -ForegroundColor Blue
