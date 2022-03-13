import React, { useState, useCallback } from "react";
import WeatherBox from "./WeatherBox";
import Location from "./Location";

import "../styles/WeatherContainer.css";

export default function WeatherBoxContainer(props) {
  const [focusBox, setFocusBox] = useState(null);

  const weatherData = props.data.slice(0, 5);

  const onFocusHandler = useCallback((id) => setFocusBox(id), []);
  //making react not recreate a function so WeatherBoxes doesnt get reavaluated when they don't need to
  //could also just pass setFocusBox as changeFocus prop since React makes sure that function never changes

  return (
    <div className="weather-container">
      <Location locationData={props.location} />
      <div className="weather-table">
        {weatherData.map((data, index) => (
          <WeatherBox
            onFocus={onFocusHandler}
            data={data}
            key={index}
            id={index}
            expand={focusBox === index}
          />
        ))}
      </div>
    </div>
  );
}
