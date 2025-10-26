# 📋 GUÍA RÁPIDA - VALIDACIÓN PMV

## ✅ Checklist de Despliegue

### Antes de desplegar
- [ ] Instalaste Node.js (https://nodejs.org)
- [ ] Tienes una cuenta de GitHub (https://github.com)
- [ ] Tienes una cuenta de Vercel (https://vercel.com)

### Pasos de despliegue
- [ ] Ejecutaste `npm install` en la carpeta del proyecto
- [ ] Creaste un repositorio en GitHub
- [ ] Subiste el código a GitHub
- [ ] Importaste el proyecto en Vercel
- [ ] Creaste la base de datos Vercel Postgres
- [ ] Ejecutaste el script `schema.sql`
- [ ] Verificaste que la encuesta funciona

### Después de desplegar
- [ ] Probaste llenar la encuesta
- [ ] Verificaste que los datos se guardan
- [ ] Accediste a `/resultados` y ves los datos

---

## 📤 7.2 VALIDACIÓN - PUBLICACIÓN

### ¿Qué necesitas mostrar?
Evidencia de que compartiste tu encuesta con personas reales.

### Cómo hacerlo:

1. **Copia la URL de tu encuesta**
   ```
   https://tu-proyecto.vercel.app/
   ```

2. **Compártela por múltiples canales:**
   - WhatsApp (grupos de la universidad)
   - Instagram Stories (con link en bio)
   - Facebook (grupos estudiantiles)
   - Email (compañeros de clase)
   - LinkedIn (red profesional)

3. **Toma capturas de pantalla de:**
   - Mensajes enviados a grupos
   - Stories publicadas
   - Posts en redes sociales
   - Emails enviados

4. **Incluye en tu evidencia:**
   - Fecha y hora de publicación
   - Cantidad de personas alcanzadas
   - Canales utilizados

### Ejemplo de mensaje para compartir:

```
🌟 ¡Hola! Estoy desarrollando WellUniversitario, 
una app de bienestar emocional para estudiantes.

¿Me ayudas con una encuesta rápida? 
Solo toma 3 minutos ⏰

👉 [tu-link-aqui]

¡Gracias por tu apoyo! 🙏
```

---

## 📊 7.3 VALIDACIÓN - RESULTADOS

### ¿Qué necesitas mostrar?
Análisis de si tu PMV cumplió el criterio de éxito.

### Paso 1: Define tu criterio de éxito ANTES de publicar

Ejemplo:
- **Criterio 1**: Obtener al menos 15 respuestas
- **Criterio 2**: Al menos 70% de los encuestados usaría la app
- **Criterio 3**: Al menos 80% recomendaría la app

### Paso 2: Recopila respuestas

- Espera al menos 48-72 horas
- Recuerda a las personas que llenen la encuesta
- Monitorea `/resultados` para ver el progreso

### Paso 3: Analiza los resultados

Accede a: `https://tu-proyecto.vercel.app/resultados`

**Toma capturas de pantalla de:**
- Panel de estadísticas principales
- Tabla de respuestas
- Gráficos (si los agregas)

### Paso 4: Saca conclusiones

**Preguntas para responder:**

1. **¿Cuántas respuestas obtuviste?**
   - ¿Se cumplió tu meta mínima?

2. **¿Qué porcentaje usaría la app?**
   - Suma: "Definitivamente sí" + "Probablemente sí"
   - ¿Supera el 70%?

3. **¿Qué porcentaje la recomendaría?**
   - Suma: "Definitivamente sí" + "Probablemente sí"  
   - ¿Supera el 80%?

4. **¿Qué funciones prefieren?**
   - ¿Cuál es la más votada?
   - ¿Hay patrones claros?

5. **¿Qué valoran más?**
   - Confidencialidad, rapidez, costo, etc.
   - ¿Coincide con tu propuesta de valor?

### Paso 5: Redacta conclusiones

**Ejemplo de análisis:**

```
RESULTADOS DE VALIDACIÓN PMV - WELLUNIVERSITARIO

Criterios de éxito definidos:
1. Mínimo 15 respuestas ✓ (obtuvimos 23)
2. 70% usaría la app ✓ (87% respondió positivamente)
3. 80% recomendaría ✓ (90% la recomendaría)

Hallazgos clave:
- El 78% experimenta estrés varias veces por semana o diariamente
- Solo el 30% ha buscado apoyo psicológico en su universidad
- La función más valorada es el "Test rápido de estrés"
- La confidencialidad es el valor principal (45% de respuestas)

Conclusión:
✓ El PMV validó exitosamente la hipótesis
✓ Existe una necesidad clara de apoyo emocional
✓ Los estudiantes valoran la privacidad y rapidez
✓ Se recomienda continuar con el desarrollo del producto

Próximos pasos:
- Desarrollar MVP funcional con test de estrés
- Implementar sistema de chat anónimo
- Buscar alianzas con universidades
```

---

## 📸 Checklist de Evidencias

### Para tu presentación/informe:

- [ ] Screenshots de la encuesta publicada
- [ ] Capturas de compartir en redes sociales
- [ ] Screenshots del dashboard de resultados
- [ ] Tabla con todas las respuestas
- [ ] Gráficos de estadísticas principales
- [ ] Documento de análisis de resultados
- [ ] Lista de conclusiones y aprendizajes
- [ ] Propuesta de siguientes pasos

---

## 🎯 Tips para Conseguir Más Respuestas

1. **Personaliza el mensaje** - No uses copy-paste genérico
2. **Ofrece incentivo** - "Los primeros 20 entran en un sorteo"
3. **Sé específico** - "Solo 3 minutos de tu tiempo"
4. **Crea urgencia** - "Necesito 20 respuestas antes del viernes"
5. **Agradece públicamente** - "¡Ya van 15 respuestas, gracias!"
6. **Haz seguimiento** - Recuerda amablemente a quienes no han respondido

---

## 🚀 URLs Importantes

- **Encuesta**: `https://tu-proyecto.vercel.app/`
- **Resultados**: `https://tu-proyecto.vercel.app/resultados`
- **GitHub**: `https://github.com/tu-usuario/tu-repo`
- **Vercel Dashboard**: `https://vercel.com/dashboard`

---

## ⚠️ Troubleshooting

### No recibo respuestas en la base de datos
1. Verifica que ejecutaste `schema.sql` en Vercel Postgres
2. Revisa los logs en Vercel > Functions
3. Prueba enviar una respuesta de prueba tú mismo

### La página no carga
1. Verifica el despliegue en Vercel Dashboard
2. Revisa los logs de build
3. Asegúrate de que todas las dependencias se instalaron

### Error 500 al enviar formulario
1. Verifica que la base de datos esté conectada
2. Revisa las variables de entorno en Vercel
3. Chequea los logs de la función API

---

**¡Éxito con tu validación! 🎉**

Si tienes problemas, revisa el README.md completo o consulta la documentación de Vercel.
