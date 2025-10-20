export const metadata = { title: 'Clima Next', description: 'Prueba técnica – App de clima' };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, Arial, sans-serif', margin: 0, padding: 16, background: '#0b0c10', color: '#e5e7eb' }}>
        <main style={{ maxWidth: 680, margin: '0 auto' }}>{children}</main>
      </body>
    </html>
  );
}
