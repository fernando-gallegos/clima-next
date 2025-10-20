import WeatherForm from '../components/WeatherForm';

/**
 * Página principal (Server Component) que renderiza el componente de cliente.
 * Mantenemos esta página sin lógica para simplificar las pruebas.
 */
export default function Page() {
  return (
    <section aria-label="main-app">
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Aplicación de Clima</h1>
      <p style={{ marginBottom: 16 }}>
        Ingresa una ciudad y obtén el clima actual (temperatura, humedad y descripción).
      </p>
      <WeatherForm />
    </section>
  );
}
