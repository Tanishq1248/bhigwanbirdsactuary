@echo off
REM Bhigwan Birds - React App Setup Script

echo ================================
echo Bhigwan Bird Sanctuary - Setup
echo ================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo X Node.js is not installed. Please install it from https://nodejs.org/
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo Node.js version: %NODE_VERSION%
echo npm version: %NPM_VERSION%
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ===== Setup complete! =====
    echo.
    echo To start the development server, run:
    echo    npm start
    echo.
    echo To build for production, run:
    echo    npm run build
    echo.
) else (
    echo X Installation failed. Please check the error messages above.
    exit /b 1
)
