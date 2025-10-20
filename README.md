# Aplicación de Clima – Next.js

## Requisitos
- Node.js (22.20.0)
- Una API key de OpenWeatherMap: https://openweathermap.org/api

## Variables de entorno
Modifica/crea las siguientes variables/archivo en `.env.local`:
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

## Covertura
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |   96.29 |    81.81 |     100 |   96.15 |                   
 app              |     100 |      100 |     100 |     100 |                   
  page.jsx        |     100 |      100 |     100 |     100 |                   
 components       |      96 |    81.81 |     100 |   95.83 |                   
  WeatherCard.jsx |     100 |       50 |     100 |     100 | 9                 
  WeatherForm.jsx |   95.65 |    88.88 |     100 |   95.45 | 35                
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.45 s
