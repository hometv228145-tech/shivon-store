@echo off
chcp 65001 >nul
title Step 2: Upload Website to Live Server
color 0B
cls

echo ===============================================================================
echo            🌱 STEP 2: UPLOAD WEBSITE TO GOOGLE LIVE SERVERS 🌱
echo ===============================================================================
echo.
echo Website files shivon-store par live upload ho rahi hain...
echo Kripya 10-15 second wait karein...
echo.

set "PATH=C:\Users\win 10\nodejs;%PATH%"
cd /d "%~dp0"

call "C:\Users\win 10\nodejs\firebase.cmd" deploy --only hosting --project shivon-store

if %errorlevel% equ 0 (
    echo.
    echo ===============================================================================
    echo 🎉 MUBARAK HO! SHIVON KRISHI STORE SAFALTAPURVAK LIVE HO GAYA HAI! 🎉
    echo ===============================================================================
    echo.
    echo Live Website Link:
    echo 👉 https://shivon-store.web.app
    echo 👉 https://shivon-store.firebaseapp.com
    echo.
    echo Website ko live dekhne ke liye koi bhi button dabayein...
    pause
    start https://shivon-store.web.app
) else (
    echo.
    echo ===============================================================================
    echo [ERROR] Deployment complete nahi hua.
    echo Kripya pehle "1-Login-Firebase.bat" chalayein aur apna account login karein.
    echo ===============================================================================
    pause
)
