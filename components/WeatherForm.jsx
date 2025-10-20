'use client';

import { useState } from 'react';
import WeatherCard from './WeatherCard';

/**
 * Componente de cliente que contiene:
 * - Un campo de entrada controlado para la ciudad.
 * - Un botón para disparar la búsqueda.
 * - Manejo de errores y estado de carga.
 * 
 * Mantiene el UI y la lógica **lo suficientemente simple y necesaria** para la prueba.
 */
export default function WeatherForm() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);

  async function onSearch(e) {
    e.preventDefault();
    setError('');
    setWeather(null);
    if (!city.trim()) {
      setError('Por favor, escribe una ciudad.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/weather?q=${encodeURIComponent(city)}`);
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Ocurrió un error.');
      else setWeather(data);
    } catch (err) {
      setError('No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSearch} aria-label="formulario-clima" style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          aria-label="ciudad-input"
          type="text"
          value={city}
          placeholder="Ej: Managua"
          onChange={(e) => setCity(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #374151', background: '#111827', color: '#e5e7eb' }}
        />
        <button
          aria-label="buscar-boton"
          type="submit"
          disabled={loading}
          style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #374151', background: '#1f2937', color: '#e5e7eb', cursor: 'pointer' }}
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <p role="alert" style={{ color: '#fca5a5', marginBottom: 12 }}>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
