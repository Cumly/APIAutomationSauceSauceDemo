@echo off
REM Guardar la ruta actual
set "CURRENT_DIR=%cd%"

REM Ir a la carpeta donde ejecutaste el archivo (la ruta actual ya está guardada en CURRENT_DIR)
cd /d "%CURRENT_DIR%"

REM Ejecutar el reporte de Cypress
npm run test-report

REM Abrir el reporte en el navegador predeterminado
start \cypress\reports\html\cypress\reports\merged.html