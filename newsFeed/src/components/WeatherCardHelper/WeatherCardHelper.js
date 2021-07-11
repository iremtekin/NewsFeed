import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from "assets/img/openWeather_lg.png"

const WeatherCardHelper = (props) => {
  // eslint-disable-next-line react/prop-types
  const { weather } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'left',
    },
    logo: {
      alignItems: 'right',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  if (!weather) {
    return <p>Lokasyon erisimine izin vermeniz gerekiyor.</p>;
  }

  // eslint-disable-next-line react/prop-types
  const icon = weather.weather.map((data) => data.icon);

  //http://openweathermap.org/img/wn/10d@2x.png
  const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

  // eslint-disable-next-line react/prop-types
  const date = new Date(weather.dt * 1000).toLocaleDateString();
  const dateToday = new Date();
  const dayNum = dateToday.getDay();
  var day = "";
  switch (dayNum) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11}>
          {/* eslint-disable-next-line react/prop-types */}
          <h3>{weather.name}</h3>
          {/* eslint-disable-next-line react/prop-types */}
          <p>{date} | {day}</p>
        </Grid>
        <Grid item xs={3}>
          {/* eslint-disable-next-line react/prop-types */}
          <img src={iconUrl}/>
        </Grid>
        <Grid item xs={9}>
          {/* eslint-disable-next-line react/prop-types */}
          <h3>{Math.round(weather.main.temp)}℃ | {weather.weather.map((data) => data.description).join(", ")}</h3>
          {/* eslint-disable-next-line react/prop-types */}
          <p>Nem: {weather.main.humidity} %  |  Rüzgar: {Math.round((weather.wind.speed)*(3.6))} km/h</p>
        </Grid>
          <Grid item xs={12}>
            <img height={24} width={57} src={logo}/>
          </Grid>
      </Grid>
    </div>
  );
};

export default WeatherCardHelper;


