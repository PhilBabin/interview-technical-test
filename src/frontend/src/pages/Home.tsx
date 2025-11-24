import { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TableChart, ViewModule } from '@mui/icons-material';
import styles from './Home.module.scss';

interface WeatherData {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
}

const Home = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=42.3601&longitude=-71.0589&current_weather=true')
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch weather', err);
        setLoading(false);
      });
  }, []);

  const getWeatherDescription = (code: number) => {
    // Simplified WMO Weather interpretation codes (https://open-meteo.com/en/docs)
    if (code === 0) return 'Clear sky';
    if (code >= 1 && code <= 3) return 'Partly cloudy';
    if (code >= 45 && code <= 48) return 'Fog';
    if (code >= 51 && code <= 67) return 'Drizzle / Rain';
    if (code >= 71 && code <= 77) return 'Snow';
    if (code >= 80 && code <= 82) return 'Rain showers';
    if (code >= 95 && code <= 99) return 'Thunderstorm';
    return 'Unknown';
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Welcome!
      </Typography>
      <Typography variant="h5" className={styles.subtitle}>
        Newforma Konekt Technical Test
      </Typography>

      <Paper className={styles.weatherContainer}>
        <Typography variant="h6" gutterBottom>
          Current Weather in Boston
        </Typography>
        {loading ? (
          <CircularProgress size={24} />
        ) : weather ? (
          <Box>
            <Typography variant="h3">
              {weather.current_weather.temperature}°C
            </Typography>
            <Typography variant="subtitle1">
              {getWeatherDescription(weather.current_weather.weathercode)}
            </Typography>
          </Box>
        ) : (
          <Typography color="error">Failed to load weather data</Typography>
        )}
      </Paper>

      <Box className={styles.buttonContainer}>
        <Button
          variant="contained"
          size="large"
          startIcon={<TableChart />}
          onClick={() => navigate('/list')}
          className={styles.navButton}
        >
          List View
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<ViewModule />}
          onClick={() => navigate('/cards')}
          className={styles.navButton}
        >
          Card View
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
