import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext,
  );
  //   console.log(currentTemperatureUnit);
  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span
        style={{ color: `${currentTemperatureUnit === "F" ? "white" : ""}` }}
        className="toggle-switch__text toggle-switch__text_F"
      >
        F
      </span>
      <span
        style={{ color: `${currentTemperatureUnit === "C" ? "white" : ""}` }}
        className="toggle-switch__text toggle-switch__text_C"
      >
        C
      </span>
      {/* TO ADD THE STYLING HERE INSTEAD OF THROUGH CSS, I ADDED THE STYLE ATTRIBUTE AND CHANGED THE COLOR USING A TEMPLATE LITERAL `${ } */}
    </label>
  );
}
