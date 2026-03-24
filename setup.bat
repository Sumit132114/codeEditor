@echo off
echo Installing Server Dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo Failed to install server dependencies!
    pause
    exit /b %errorlevel%
)

echo.
echo Installing Client Dependencies...
cd ../client
call npm install
if %errorlevel% neq 0 (
    echo Failed to install client dependencies!
    pause
    exit /b %errorlevel%
)

echo.
echo All dependencies installed successfully!
echo You can now run the project.
pause
