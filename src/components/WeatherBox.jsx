import React from "react";
import getWeekday from "../functions/getWeekday";
import convertTime from "../functions/convertTime";

import WeatherMoreData from "./WeatherMoreData";

import "../styles/Weather.css";

function WeatherBox(props) {
  const { dt, temp, weather } = props.data;
  console.log("reavaluted" + props.id);

  const date = new Date(convertTime(dt));
  const today = date.getDay();
  const weekday = getWeekday(today);

  const { icon, description } = weather[0];

  const imageLink = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  function handleClick() {
    if (props.expand) props.onFocus(null);
    else props.onFocus(props.id);
  }

  return (
    <div className="weather-box">
      <div
        className={props.expand ? "weather weather--expand" : "weather"}
        onClick={handleClick}
      >
        <p className="weather__day"> {weekday} </p>
        <p className="weather__date">{convertTime(dt)}</p>
        <img className="weather__icon" src={imageLink} alt="weather icon"></img>
        <p className="weather__temperature"> {temp.day} °C</p>
        <p className="weather__description">{description}</p>
        {props.expand && <WeatherMoreData data={props.data} />}
      </div>
    </div>
  );
}

export default React.memo(WeatherBox)
