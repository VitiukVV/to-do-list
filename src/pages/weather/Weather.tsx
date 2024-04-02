import { Box, Button, Container, TextField } from '@mui/material';
import Notiflix from 'notiflix';
import { ChangeEvent, FormEvent, useState } from 'react';
import { WeatherData } from '../../interface/interface';
import { getWeatherDataByCityName } from '../../service/ServiceApi';
import WeatherCard from '../../components/weather/weatherCard/WeatherCard';

const Weather = () => {
  const [cityName, setCityName] = useState<string>('');
  const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value.trim());
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!cityName) {
        return;
      }
      const response = await getWeatherDataByCityName(cityName);
      setWeatherInfo(response);
      setCityName('');
      Notiflix.Notify.success('The weather was loaded!');
    } catch (error) {
      Notiflix.Notify.failure('Sorry, please enter another city');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      }}
    >
      <Box>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              justifyContent: 'center',
            }}
          >
            <TextField
              autoFocus
              type="text"
              name="user-country"
              value={cityName}
              label="Enter your city"
              variant="outlined"
              onChange={handleInputChange}
            />
            <Button type="submit" variant="contained">
              Search
            </Button>
          </Box>
        </form>
        {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
      </Box>
    </Container>
  );
};

export default Weather;
