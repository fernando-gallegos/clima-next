# Aplicación de Clima – Next.js

## Requisitos
- Node.js 18+
- Una API key de OpenWeatherMap: https://openweathermap.org/api

## Variables de entorno
Modifica/crea las siguientes variables en `.env.local`:
```
OWM_API_KEY=tu_api_key
```

## Comandos
```bash
npm install
npm run dev         # desarrollo en http://localhost:3000
npm test            # ejecuta pruebas con cobertura
```

## Notas
- La llamada a la API se realiza del lado del **servidor** en `/api/weather` para no exponer la API key en el cliente.
- Interfaz sencilla con un campo de texto y un botón; muestra temperatura, humedad, descripción y otros datos en español.
