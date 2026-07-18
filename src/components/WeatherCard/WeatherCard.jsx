import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const condition = weatherData.condition;
  let conditionKey = condition;

  if (condition === "clouds") {
    conditionKey = "cloudy";
  } else if (condition === "drizzle") {
    conditionKey = "rain";
  } else if (condition === "thunderstorm") {
    conditionKey = "storm";
  } else if (
    condition === "mist" ||
    condition === "smoke" ||
    condition === "haze" ||
    condition === "dust" ||
    condition === "fog" ||
    condition === "sand" ||
    condition === "ash" ||
    condition === "squall" ||
    condition === "tornado"
  ) {
    conditionKey = "fog";
  }

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay && option.condition === conditionKey
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        °{currentTemperatureUnit}
      </p>
      {/* <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p> */}
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherData.isDay ? "day" : "night"}time ${
          weatherOption?.condition || conditionKey || "default"
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
