# 🌟 WellUniversitario - Encuesta PMV

## 📋 Descripción
Proyecto de validación de Producto Mínimo Viable (PMV) para WellUniversitario, una aplicación de bienestar emocional para estudiantes universitarios.

## 🚀 Guía de Despliegue en Vercel

### Paso 1: Instalar Dependencias

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
npm install
```

### Paso 2: Crear Repositorio Git

```powershell
git init
git add .
git commit -m "Initial commit - WellUniversitario PMV"
```

### Paso 3: Subir a GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio
2. Copia el nombre del repositorio
3. Ejecuta en PowerShell:

```powershell
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Paso 4: Desplegar en Vercel

#### 4.1 Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "Add New Project"

#### 4.2 Importar proyecto
1. Selecciona el repositorio que acabas de crear
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Haz clic en "Deploy"

#### 4.3 Configurar Base de Datos Vercel Postgres

1. En tu proyecto de Vercel, ve a la pestaña **Storage**
2. Haz clic en **Create Database**
3. Selecciona **Postgres**
4. Dale un nombre a tu base de datos (ej: `welluniversitario-db`)
5. Selecciona la región más cercana
6. Haz clic en **Create**

#### 4.4 Ejecutar Script de Schema

1. Ve a la pestaña **Data** de tu base de datos
2. Haz clic en **Query**
3. Copia y pega el contenido del archivo `schema.sql`:

```sql
CREATE TABLE IF NOT EXISTS respuestas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  edad INTEGER NOT NULL,
  universidad VARCHAR(255) NOT NULL,
  frecuencia_estres VARCHAR(50) NOT NULL,
  busco_apoyo VARCHAR(10) NOT NULL,
  usaria_app VARCHAR(50) NOT NULL,
  funciones JSONB,
  valor_principal VARCHAR(50) NOT NULL,
  recomendaria VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_respuestas_timestamp ON respuestas(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_respuestas_universidad ON respuestas(universidad);
```

4. Haz clic en **Run Query**

#### 4.5 Conectar la base de datos al proyecto

Las variables de entorno se configuran automáticamente cuando creas la base de datos en Vercel.

### Paso 5: Verificar Despliegue

1. Ve a la URL que Vercel te proporciona (ej: `https://tu-proyecto.vercel.app`)
2. Deberías ver la encuesta funcionando
3. Prueba llenar y enviar la encuesta
4. Ve a `/resultados` para ver las respuestas

## 📁 Estructura del Proyecto

```
.
├── app/
│   ├── api/
│   │   ├── submit/
│   │   │   └── route.ts          # Endpoint para guardar respuestas
│   │   └── results/
│   │       └── route.ts          # Endpoint para obtener respuestas
│   ├── resultados/
│   │   ├── page.tsx              # Página de resultados/dashboard
│   │   └── resultados.module.css # Estilos de resultados
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Página de la encuesta
│   ├── page.module.css           # Estilos de la encuesta
│   └── globals.css               # Estilos globales
├── schema.sql                    # Script de creación de base de datos
├── package.json                  # Dependencias del proyecto
├── next.config.js                # Configuración de Next.js
├── tsconfig.json                 # Configuración de TypeScript
└── README.md                     # Este archivo
```

## 🔗 URLs del Proyecto

- **Encuesta**: `https://tu-proyecto.vercel.app/`
- **Resultados**: `https://tu-proyecto.vercel.app/resultados`

## 📊 Funcionalidades

### Encuesta (/)
- Formulario completo de validación PMV
- 10 preguntas sobre bienestar emocional universitario
- Validación de campos requeridos
- Almacenamiento en base de datos PostgreSQL
- Diseño responsive y atractivo

### Dashboard de Resultados (/resultados)
- Visualización de todas las respuestas
- Estadísticas en tiempo real:
  - Total de respuestas
  - Edad promedio
  - % que recomendaría la app
  - % que usaría la app
- Tabla con todas las respuestas
- Actualización automática

## 🛠️ Desarrollo Local

Para ejecutar el proyecto localmente:

```powershell
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

**Nota**: Para desarrollo local necesitarás configurar las variables de entorno de Vercel Postgres. Usa el comando:

```powershell
vercel env pull .env.local
```

## 📝 Uso para Evidencia PMV

### Para 7.2 VALIDACIÓN - PUBLICACIÓN

1. **Comparte la URL de tu encuesta**: `https://tu-proyecto.vercel.app/`
2. **Captura de pantalla**: Toma screenshots de:
   - La encuesta desplegada
   - Compartiendo en redes sociales
   - Mensajes enviados a estudiantes

### Para 7.3 VALIDACIÓN - RESULTADOS

1. **Accede al dashboard**: `https://tu-proyecto.vercel.app/resultados`
2. **Captura de pantalla de**:
   - Estadísticas principales
   - Tabla de respuestas
3. **Analiza los resultados**:
   - ¿Cuántas personas respondieron?
   - ¿Qué porcentaje recomendaría la app?
   - ¿Qué porcentaje usaría la app?
   - ¿Se cumplió tu criterio de éxito?

## 🎯 Criterios de Éxito Sugeridos

- **Mínimo**: 15 respuestas de estudiantes universitarios
- **Meta**: Al menos 70% diría que usaría la app
- **Ideal**: Al menos 80% recomendaría la app a otros

## 🔒 Seguridad y Privacidad

- Las respuestas se almacenan de forma segura en Vercel Postgres
- Solo tú tienes acceso al dashboard de resultados
- Los emails son opcionales
- Los datos personales se manejan con confidencialidad

## 🚨 Solución de Problemas

### Error al enviar formulario
- Verifica que la base de datos esté creada y conectada
- Revisa los logs en Vercel Dashboard > Functions

### No aparecen resultados
- Asegúrate de haber ejecutado el script `schema.sql`
- Verifica que la tabla `respuestas` exista en la base de datos

### Errores de compilación
- Ejecuta `npm install` nuevamente
- Verifica que todas las dependencias estén instaladas

## 📧 Contacto

Para más información sobre WellUniversitario:
- Proyecto académico de Herramientas para el Emprendimiento
- Duoc UC - 6to Semestre

---

**¡Éxito con tu validación PMV!** 🎉
