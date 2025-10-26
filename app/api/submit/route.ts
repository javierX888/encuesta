import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validar datos requeridos
    if (!data.nombre || !data.edad || !data.universidad || !data.frecuencia_estres || 
        !data.busco_apoyo || !data.usaria_app || !data.valor_principal || !data.recomendaria) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Insertar respuesta en la base de datos
    const result = await sql`
      INSERT INTO respuestas (
        nombre, edad, universidad, frecuencia_estres, busco_apoyo, 
        usaria_app, funciones, valor_principal, recomendaria, email, timestamp
      ) VALUES (
        ${data.nombre}, 
        ${parseInt(data.edad)}, 
        ${data.universidad}, 
        ${data.frecuencia_estres}, 
        ${data.busco_apoyo}, 
        ${data.usaria_app}, 
        ${JSON.stringify(data.funciones || [])}, 
        ${data.valor_principal}, 
        ${data.recomendaria}, 
        ${data.email || null},
        ${data.timestamp || new Date().toISOString()}
      )
      RETURNING id;
    `;

    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id 
    });

  } catch (error) {
    console.error('Error al guardar respuesta:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
