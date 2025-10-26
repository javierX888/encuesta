'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: any = {
      nombre: formData.get('nombre'),
      edad: formData.get('edad'),
      universidad: formData.get('universidad'),
      frecuencia_estres: formData.get('frecuencia_estres'),
      busco_apoyo: formData.get('busco_apoyo'),
      usaria_app: formData.get('usaria_app'),
      funciones: formData.getAll('funciones'),
      valor_principal: formData.get('valor_principal'),
      recomendaria: formData.get('recomendaria'),
      email: formData.get('email') || null,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert('Hubo un error al enviar la encuesta. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar la encuesta. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <h2>¡Gracias por tu tiempo! 🎉</h2>
          <p>Tus respuestas han sido registradas. Te contactaremos pronto para la beta de WellUniversitario.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>🌟 WellUniversitario</h1>
      <p className={styles.subtitle}>Tu compañero de bienestar emocional</p>

      <form onSubmit={handleSubmit}>
        {/* Sección 1: Datos personales */}
        <div className={styles.question}>
          <label htmlFor="nombre">1. ¿Cuál es tu nombre? *</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className={styles.question}>
          <label htmlFor="edad">2. ¿Cuántos años tienes? *</label>
          <input type="number" id="edad" name="edad" min="16" max="60" required />
        </div>

        <div className={styles.question}>
          <label htmlFor="universidad">3. ¿En qué universidad estudias? *</label>
          <input type="text" id="universidad" name="universidad" required />
        </div>

        {/* Sección 2: Validación del problema */}
        <div className={styles.question}>
          <label>4. ¿Con qué frecuencia sientes estrés o ansiedad por temas universitarios? *</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input type="radio" name="frecuencia_estres" value="diario" required />
              <span>Todos los días</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="frecuencia_estres" value="varias_veces" />
              <span>Varias veces a la semana</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="frecuencia_estres" value="ocasional" />
              <span>Ocasionalmente</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="frecuencia_estres" value="rara_vez" />
              <span>Rara vez</span>
            </label>
          </div>
        </div>

        <div className={styles.question}>
          <label>5. ¿Has buscado apoyo psicológico o emocional en tu universidad? *</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input type="radio" name="busco_apoyo" value="si" required />
              <span>Sí</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="busco_apoyo" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Sección 3: Validación de la solución */}
        <div className={styles.question}>
          <label>6. ¿Te gustaría usar una app que te acompañe emocionalmente 24/7? *</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input type="radio" name="usaria_app" value="definitivamente_si" required />
              <span>Definitivamente sí</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="usaria_app" value="probablemente_si" />
              <span>Probablemente sí</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="usaria_app" value="tal_vez" />
              <span>Tal vez</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="usaria_app" value="probablemente_no" />
              <span>Probablemente no</span>
            </label>
          </div>
        </div>

        <div className={styles.question}>
          <label>7. ¿Qué funciones te parecerían más útiles? (Selecciona todas las que apliquen) *</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxOption}>
              <input type="checkbox" name="funciones" value="test_estres" />
              <span>Test rápido de estrés (5 minutos)</span>
            </label>
            <label className={styles.checkboxOption}>
              <input type="checkbox" name="funciones" value="chat_anonimo" />
              <span>Chat anónimo con otros estudiantes</span>
            </label>
            <label className={styles.checkboxOption}>
              <input type="checkbox" name="funciones" value="meditaciones" />
              <span>Meditaciones guiadas</span>
            </label>
            <label className={styles.checkboxOption}>
              <input type="checkbox" name="funciones" value="recursos" />
              <span>Artículos y recursos educativos</span>
            </label>
          </div>
        </div>

        <div className={styles.question}>
          <label htmlFor="valor_principal">8. ¿Qué valoras más en una plataforma de bienestar? *</label>
          <select name="valor_principal" id="valor_principal" required>
            <option value="">Selecciona una opción...</option>
            <option value="confidencialidad">Confidencialidad/Anonimato</option>
            <option value="rapidez">Rapidez en obtener ayuda</option>
            <option value="costo">Costo bajo o gratuito</option>
            <option value="comunidad">Comunidad de apoyo</option>
            <option value="profesionales">Acceso a profesionales</option>
          </select>
        </div>

        {/* Sección 4: Recomendación */}
        <div className={styles.question}>
          <label>9. ¿Recomendarías esta app a otros estudiantes? *</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input type="radio" name="recomendaria" value="definitivamente_si" required />
              <span>Definitivamente sí</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="recomendaria" value="probablemente_si" />
              <span>Probablemente sí</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" name="recomendaria" value="tal_vez" />
              <span>Tal vez</span>
            </label>
          </div>
        </div>

        <div className={styles.question}>
          <label htmlFor="email">10. Si quieres probar la beta, déjanos tu email (opcional)</label>
          <input type="email" id="email" name="email" placeholder="tu@email.com" />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Respuestas ✓'}
        </button>
      </form>
    </div>
  );
}
