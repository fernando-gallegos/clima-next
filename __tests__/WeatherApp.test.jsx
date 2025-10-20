import { render, screen, fireEvent } from '@testing-library/react';
import WeatherForm from '../components/WeatherForm';
import Page from '../app/page.jsx';

beforeEach(() => {
  global.fetch = jest.fn();
});
afterAll(() => {
  jest.restoreAllMocks();
});

test('renderiza el formulario y controles básicos', () => {
  render(<WeatherForm />);
  expect(screen.getByLabelText('formulario-clima')).toBeInTheDocument();
  expect(screen.getByLabelText('ciudad-input')).toBeInTheDocument();
  expect(screen.getByLabelText('buscar-boton')).toBeInTheDocument();
});

test('muestra resultado tras búsqueda exitosa', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ city: 'Managua', country: 'NI', temp: 30, feelsLike: 35, humidity: 70, description: 'soleado' })
  });

  render(<WeatherForm />);
  fireEvent.change(screen.getByLabelText('ciudad-input'), { target: { value: 'Managua' } });
  fireEvent.click(screen.getByLabelText('buscar-boton'));

  const card = await screen.findByLabelText('resultado-clima');
  expect(card).toBeInTheDocument();
  expect(card).toHaveTextContent('Managua');
  expect(card).toHaveTextContent('NI');
  expect(card).toHaveTextContent('30');
  expect(card).toHaveTextContent('35');
  expect(card).toHaveTextContent('70');
  expect(card).toHaveTextContent('soleado');
});

test('maneja error al buscar una ciudad inválida', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({ error: 'No se encontró la ciudad o hubo un problema con el servicio.' })
  });

  render(<WeatherForm />);
  fireEvent.change(screen.getByLabelText('ciudad-input'), { target: { value: 'CiudadQueNoExiste' } });
  fireEvent.click(screen.getByLabelText('buscar-boton'));

  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent('No se encontró la ciudad');
});

test('valida campo vacío antes de buscar', async () => {
  render(<WeatherForm />);
  fireEvent.click(screen.getByLabelText('buscar-boton'));
  expect(await screen.findByRole('alert')).toHaveTextContent('Por favor, escribe una ciudad.');
});

test('valida carga de página', async () => {
  render(<Page />);
  const obj = await screen.findByLabelText('main-app');
  expect(obj).toBeInTheDocument();
  expect(obj).toHaveTextContent('Aplicación de Clima');
});