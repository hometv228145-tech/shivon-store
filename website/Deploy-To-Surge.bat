@echo off
chcp 65001 >nul
title Shivon Krishi Store - Instant Live Deploy
color 0A
cls

echo ===============================================================================
echo            🌱 SHIVON KRISHI STORE - INSTANT LIVE DEPLOYMENT 🌱
echo ===============================================================================
echo.
echo Website Folder: %~dp0
echo Domain Target : https://shivon-store.surge.sh
echo.
echo ===============================================================================
echo [INFO] Pehli baar me aapse 'email' aur 'password' puchega:
echo        1. Apna koi bhi email type karke Enter dabayein.
echo        2. Koi bhi password (jaise 123456) type karke Enter dabayein.
echo           (Dhyan dein: Password type karte waqt screen par dikhega nahi, 
echo            aap bas type karke Enter daba dein)
echo ===============================================================================
echo.

set "PATH=C:\Users\win 10\nodejs;%PATH%"
cd /d "%~dp0"

"C:\Users\win 10\nodejs\surge.cmd" . shivon-store.surge.sh

if %errorlevel% equ 0 (
    echo.
    echo ===============================================================================
    echo 🎉 MUBARAK HO! AAPKI WEBSITE SAFALTAPURVAK LIVE HO GAYI HAI! 🎉
    echo ===============================================================================
    echo.
    echo Live Website Link:
    echo 👉 https://shivon-store.surge.sh
    echo.
    pause
    start https://shivon-store.surge.sh
) else (
    echo.
    echo ===============================================================================
    echo [NOTE] Agar shivon-store.surge.sh naam busy hai, toh shivon-krishi.surge.sh try karein:
    echo ===============================================================================
    "C:\Users\win 10\nodejs\surge.cmd" . shivon-krishi.surge.sh
    pause
)
