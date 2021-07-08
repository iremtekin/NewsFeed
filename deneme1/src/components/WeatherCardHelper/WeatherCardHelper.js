import React from "react";
const WeatherCardHelper = (props) => {
  // eslint-disable-next-line react/prop-types
  const { weather } = props;

  if (!weather) {
    return <p>Lokasyon erisimine izin vermeniz gerekiyor.</p>;
  }

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <h3>{weather.name}</h3>
      {/* eslint-disable-next-line react/prop-types */}
      <h4>{weather.weather.map((data) => data.description).join(", ")}</h4>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{weather.main.temp} ℃</p>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default WeatherCardHelper;
