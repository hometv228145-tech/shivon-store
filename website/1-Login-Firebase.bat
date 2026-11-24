@echo off
chcp 65001 >nul
title Step 1: Firebase Login
color 0A
cls

echo ===============================================================================
echo            🌱 STEP 1: GOOGLE FIREBASE ACCOUNT LOGIN 🌱
echo ===============================================================================
echo.
echo Abhi aapke samne Firebase login shuru hoga.
echo.
echo Dhyan se yeh 2 cheezein dekhein:
echo  1. Agar screen par '(Y/n)' puche, toh 'Y' dabakar Enter karein.
echo  2. Browser me Google Login page khulega, apna Google account chunein
echo     aur "Allow" par click karein.
echo.
echo ===============================================================================
echo Login shuru karne ke liye koi bhi button dabayein...
pause >nul

set "PATH=C:\Users\win 10\nodejs;%PATH%"
cd /d "%~dp0"

call "C:\Users\win 10\nodejs\firebase.cmd" login

echo.
echo ===============================================================================
echo Agar upar "Success! Logged in as..." dikh raha hai:
echo  👉 Toh yeh window band karein aur ab "2-Deploy-Website.bat" chalayein!
echo ===============================================================================
pause
