@echo off
chcp 65001 >nul
title Shivon Krishi Store - 1-Click Firebase Live Deploy
color 0A
cls

echo ===============================================================================
echo            🌱 SHIVON KRISHI STORE - 1-CLICK FIREBASE LIVE DEPLOY 🌱
echo ===============================================================================
echo.
echo Target Project    : shivon-store
echo Firebase CLI v15  : C:\Users\win 10\nodejs\firebase.cmd
echo Website Directory : %~dp0
echo.

set "PATH=C:\Users\win 10\nodejs;%PATH%"
cd /d "%~dp0"

echo ===============================================================================
echo [STEP 1] GOOGLE ACCOUNT LOGIN
echo ===============================================================================
echo.
echo Firebase login shuru ho raha hai...
echo.
echo Agar screen par "(Y/n)" puche, toh keyboard par 'Y' dabakar Enter karein.
echo Iske baad aapke browser me Google login page khulega:
echo   - Apna Google account chunein aur "Allow" par click karein.
echo.

call "C:\Users\win 10\nodejs\firebase.cmd" login

echo.
echo ===============================================================================
echo [STEP 2] LIVE HOSTING PAR UPLOAD (DEPLOY)
echo ===============================================================================
echo.
echo Website files shivon-store par upload ho rahi hain...
echo Kripya 10-15 second wait karein...
echo.

call "C:\Users\win 10\nodejs\firebase.cmd" deploy --only hosting --project shivon-store

if %errorlevel% equ 0 (
    echo.
    echo ===============================================================================
    echo 🎉 MUBARAK HO! SHIVON KRISHI STORE SAFALTAPURVAK LIVE HO GAYA HAI! 🎉
    echo ===============================================================================
    echo.
    echo Aapki Live Website ka link hai:
    echo 👉 https://shivon-store.web.app
    echo 👉 https://shivon-store.firebaseapp.com
    echo.
    echo Website ko live dekhne ke liye koi bhi button dabayein...
    pause
    start https://shivon-store.web.app
) else (
    echo.
    echo ===============================================================================
    echo [NOTE] Agar koi error aayi hai toh upar check karein.
    echo ===============================================================================
    pause
)
