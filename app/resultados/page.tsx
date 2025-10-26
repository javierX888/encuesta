'use client';

import { useEffect, useState } from 'react';
import styles from './resultados.module.css';

interface Respuesta {
  id: number;
  nombre: string;
  edad: number;
  universidad: string;
  frecuencia_estres: string;
  busco_apoyo: string;
  usaria_app: string;
  funciones: string[];
  valor_principal: string;
  recomendaria: string;
  email: string | null;
  timestamp: string;
}

export default function Resultados() {
  const [respuestas, setRespuestas] = useState<Respuesta[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    promedioEdad: 0,
    recomendarian: 0,
    usarianApp: 0,
  });

  useEffect(() => {
    fetchRespuestas();
  }, []);

  const fetchRespuestas = async () => {
    try {
      const response = await fetch('/api/results');
      const result = await response.json();
      
      if (result.success) {
        setRespuestas(result.data);
        calcularEstadisticas(result.data);
      }
    } catch (error) {
      console.error('Error al cargar respuestas:', error);
    } finally {
      setLoading(false);
    }
  };

  const calcularEstadisticas = (data: Respuesta[]) => {
    const total = data.length;
    const promedioEdad = total > 0 
      ? Math.round(data.reduce((sum, r) => sum + r.edad, 0) / total) 
      : 0;
    
    const recomendarian = data.filter(
      r => r.recomendaria === 'definitivamente_si' || r.recomendaria === 'probablemente_si'
    ).length;

    const usarianApp = data.filter(
      r => r.usaria_app === 'definitivamente_si' || r.usaria_app === 'probablemente_si'
    ).length;

    setStats({
      total,
      promedioEdad,
      recomendarian: total > 0 ? Math.round((recomendarian / total) * 100) : 0,
      usarianApp: total > 0 ? Math.round((usarianApp / total) * 100) : 0,
    });
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <h1>Cargando resultados...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>📊 Resultados de la Encuesta</h1>
      <p className={styles.subtitle}>WellUniversitario - Validación PMV</p>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>{stats.total}</h3>
          <p>Respuestas totales</p>
        </div>
        <div className={styles.statCard}>
          <h3>{stats.promedioEdad} años</h3>
          <p>Edad promedio</p>
        </div>
        <div className={styles.statCard}>
          <h3>{stats.recomendarian}%</h3>
          <p>Recomendarían la app</p>
        </div>
        <div className={styles.statCard}>
          <h3>{stats.usarianApp}%</h3>
          <p>Usarían la app</p>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <h2>Respuestas recibidas</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Universidad</th>
              <th>Edad</th>
              <th>Frecuencia estrés</th>
              <th>Usaría app</th>
              <th>Recomendaría</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {respuestas.map((r) => (
              <tr key={r.id}>
                <td>{r.nombre}</td>
                <td>{r.universidad}</td>
                <td>{r.edad}</td>
                <td>{r.frecuencia_estres}</td>
                <td>{r.usaria_app}</td>
                <td>{r.recomendaria}</td>
                <td>{new Date(r.timestamp).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {respuestas.length === 0 && (
        <div className={styles.empty}>
          <p>Aún no hay respuestas registradas.</p>
        </div>
      )}
    </div>
  );
}
