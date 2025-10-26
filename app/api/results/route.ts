import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Obtener todas las respuestas
    const result = await sql`
      SELECT * FROM respuestas 
      ORDER BY timestamp DESC;
    `;

    return NextResponse.json({ 
      success: true, 
      data: result.rows,
      count: result.rowCount 
    });

  } catch (error) {
    console.error('Error al obtener respuestas:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
