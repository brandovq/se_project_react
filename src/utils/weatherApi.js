import { weatherTypes } from "./constants.js";

export const getWeather = ({ latitude, longitude }, apiKey) => {
  return fetch(
    // its in farenheit because we're specifying &units=imperial in the API request below
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
  //   Above I converted sunrise from seconds to miliseconds. You do this by multiplying bt 1000 because theres 1000 miliseconds in a seconds.
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return weatherTypes.hot;
  } else if (temperature >= 66 && temperature < 86) {
    return weatherTypes.warm;
  } else {
    return weatherTypes.cold;
  }
};
