export const api_constants = {
  base_url: 'https://api.openweathermap.org/data/2.5/',
  weather_key: '&appid=b4f2fd547b0830b85062d480101345a1',
  weather_request: {
    get_by_name: '/weather?q=%{cityName}&units=metric&lang=pt-br',
  },
  weather_cities: [
    'rolandia',
    'lisboa',
    'madrid',
    'paris',
    'berlim',
    'copenhague',
    'roma',
    'londres',
    'dublin',
    'praga',
    'viena',
  ],
};
