/**
 * Endpoint del lado del servidor que actúa como proxy hacia OpenWeatherMap.
 * - Evita exponer la API key al navegador.
 * - Normaliza la respuesta que necesita el cliente.
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('q');
    if (!city || city.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Ciudad requerida' }), { status: 400 });
    }

    const apiKey = process.env.OWM_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Falta la API key del servidor' }), { status: 500 });
    }

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.set('appid', apiKey);
    url.searchParams.set('q', city);
    url.searchParams.set('units', 'metric');
    url.searchParams.set('lang', 'es');

    const resp = await fetch(url.toString());
    
    if (!resp.ok) {
      return new Response(JSON.stringify({ error: 'No se encontró la ciudad o hubo un problema con el servicio.' }), { status: resp.status });
    }
    const data = await resp.json();

    const payload = {
      city: data.name,
      country: data.sys?.country,
      temp: Math.round(data.main?.temp),
      feelsLike: Math.round(data.main?.feels_like),
      humidity: data.main?.humidity,
      description: data.weather?.[0]?.description ?? 'Sin descripción'
    };

    return new Response(JSON.stringify(payload), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
}
