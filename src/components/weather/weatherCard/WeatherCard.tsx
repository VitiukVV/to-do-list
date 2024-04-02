import { Card, CardContent, Typography } from '@mui/material';
import { WeatherData } from '../../../interface/interface';
import { convertSecondsToHoursAndMinutes } from '../../../tools/convertSecondsToHoursAndMinutes';

interface WeatherCardProps {
  weatherInfo: WeatherData;
}

const WeatherCard = ({ weatherInfo }: WeatherCardProps) => {
  console.log(weatherInfo.main.temp);
  console.log('first');
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        maxWidth: 345,
        mx: 'auto',
      }}
    >
      <CardContent>
        <Typography component="h2" variant="h6">
          {weatherInfo.name}
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Description: {weatherInfo.weather[0].description}
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Temperature: {weatherInfo.main.temp.toFixed()}&deg;C
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Feels like: {weatherInfo.main.feels_like.toFixed()}&deg;C
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Humidity: {weatherInfo.main.humidity}%
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Sunrise:{' '}
              {convertSecondsToHoursAndMinutes(weatherInfo.sys.sunrise)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Sunset: {convertSecondsToHoursAndMinutes(weatherInfo.sys.sunset)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Clouds: {weatherInfo.clouds.all}%
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Wind speed: {weatherInfo.wind.speed} m/s
            </Typography>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
