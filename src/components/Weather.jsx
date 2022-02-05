import React, { useEffect, useState } from "react";
import getWeekday from "../functions/getWeekday";
import convertTime from "../functions/convertTime";

import WeatherMoreData from "./WeatherMoreData";

import '../styles/Weather.css';

export default function WeatherBox(props){
  const {dt,temp,weather} = props.data;;

  const date= new Date(convertTime(dt));
  const today= date.getDay();
  const weekday = getWeekday(today);

  const {icon,description} = weather[0];

  const imageLink = "http://openweathermap.org/img/wn/" + icon +"@2x.png";

  const [focus, setFocus] = useState(false);

  function handleClick(){
    if(focus) props.changeFocus(null);
    else props.changeFocus(props.id);
  }

  useEffect(()=>{
    setFocus(props.id === props.chosenBox);
  },[props.chosenBox, props.id]);



  return (
    <div className="weather-box">
      <div 
        className= { focus ? "weather weather--expand" : "weather" }
        onClick={handleClick}
      >
        <p className="weather__day"> {weekday} </p>
        <p className="weather__date">{convertTime(dt)}</p>
        <img className="weather__icon" src={imageLink} alt="weather icon"></img>
        <p className="weather__temperature">  {temp.day} °C</p>
        <p className="weather__description">{description}</p>
        {focus ? <WeatherMoreData data={props.data}/> : null}

      </div>
        

      
    </div>
    
  )


};