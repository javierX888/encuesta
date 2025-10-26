import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WellUniversitario - Encuesta PMV',
  description: 'Validación del Producto Mínimo Viable de WellUniversitario',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
