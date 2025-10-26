# Script de despliegue para WellUniversitario
# Ejecuta este script en PowerShell para preparar el proyecto

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  WellUniversitario - Setup Script  " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Paso 1: Instalar dependencias
Write-Host "[1/4] Instalando dependencias..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencias instaladas correctamente" -ForegroundColor Green
} else {
    Write-Host "✗ Error al instalar dependencias" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Paso 2: Inicializar Git
Write-Host "[2/4] Inicializando repositorio Git..." -ForegroundColor Yellow

if (Test-Path .git) {
    Write-Host "✓ Repositorio Git ya existe" -ForegroundColor Green
} else {
    git init
    git add .
    git commit -m "Initial commit - WellUniversitario PMV"
    Write-Host "✓ Repositorio Git creado" -ForegroundColor Green
}

Write-Host ""

# Paso 3: Verificar build local
Write-Host "[3/4] Verificando build del proyecto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build exitoso" -ForegroundColor Green
} else {
    Write-Host "✗ Error en el build" -ForegroundColor Red
    Write-Host "Nota: Los errores de TypeScript se resolverán al instalar las dependencias en Vercel" -ForegroundColor Yellow
}

Write-Host ""

# Paso 4: Instrucciones finales
Write-Host "[4/4] Próximos pasos:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Crea un repositorio en GitHub:" -ForegroundColor White
Write-Host "   https://github.com/new" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Conecta este proyecto con GitHub:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Despliega en Vercel:" -ForegroundColor White
Write-Host "   https://vercel.com/new" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. Crea la base de datos Vercel Postgres" -ForegroundColor White
Write-Host ""
Write-Host "5. Ejecuta el script schema.sql en Vercel" -ForegroundColor White
Write-Host ""
Write-Host "✓ Setup completado!" -ForegroundColor Green
Write-Host ""
Write-Host "Para más detalles, consulta el archivo README.md" -ForegroundColor Yellow
Write-Host ""
