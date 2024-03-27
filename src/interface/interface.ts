export interface WeatherData {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number; gust: number };
}
export interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface ToDoState {
  tasks: Todo[];
  filters: { status: string };
}
