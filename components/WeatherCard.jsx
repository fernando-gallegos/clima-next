/**
 * Tarjeta presentacional que muestra:
 * - Ciudad
 * - Temperatura (°C)
 * - Humedad (%)
 * - Descripción (texto en español)
 */
export default function WeatherCard({ data }) {
  const { city, country, temp, feelsLike, humidity, description } = data ?? {};
  
  return (
    <article aria-label="resultado-clima" style={{ border: '1px solid #374151', borderRadius: 12, padding: 16, background: '#111827' }}>
      <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 22 }}>{city}, <small>{country}</small></h2>
      <p style={{ margin: '6px 0' }}><strong>Temperatura:</strong> {temp} °C</p>
      <p style={{ margin: '6px 0' }}><strong>Sensación térmica:</strong> {feelsLike} °C</p>
      <p style={{ margin: '6px 0' }}><strong>Humedad:</strong> {humidity}%</p>
      <p style={{ margin: '6px 0' }}><strong>Descripción:</strong> {description}</p>
    </article>
  );
}
