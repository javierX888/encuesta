-- Script para crear la tabla de respuestas en Vercel Postgres
-- Ejecuta este script en el panel de Vercel Postgres después de crear la base de datos

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

-- Índice para búsquedas más rápidas por timestamp
CREATE INDEX IF NOT EXISTS idx_respuestas_timestamp ON respuestas(timestamp DESC);

-- Índice para búsquedas por universidad
CREATE INDEX IF NOT EXISTS idx_respuestas_universidad ON respuestas(universidad);
