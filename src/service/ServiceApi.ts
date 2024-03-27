import axios, { AxiosResponse } from 'axios';
import { WeatherData } from '../interface/interface';
import { BASE_URL } from '../constants/constants';

const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeatherDataByCityName = async (
  cityName: string
): Promise<WeatherData> => {
  try {
    const response: AxiosResponse<WeatherData> = await axios.get<WeatherData>(
      `${BASE_URL}`,
      {
        params: {
          q: cityName,
          appid: API_KEY,
          lang: 'en',
          units: 'metric',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
