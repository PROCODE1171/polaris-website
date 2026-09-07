@echo off
title POLARIS HUB - Local Server
echo ========================================================
echo  ✦ POLARIS GAMING & MODDING HUB
echo ========================================================
echo  Starting local web server on port 8080...
echo  Opening http://localhost:8080 in your default web browser...
start http://localhost:8080
echo  [INFO] Press Ctrl+C in this window to stop the server anytime.
echo ========================================================
python -m http.server 8080
