import React from "react";
import '../styles/WeatherMoreData.css';

export default function WeatherMoreData(props){
  return (
    <div className = "weather-more-data">
      <p>Humidity: {props.data.humidity}%</p>
      <p>Pressure: {props.data.pressure} hPa</p>
      <p>Cloudiness: {props.data.clouds}%</p>
    </div> 
  )

}