import React, { useState } from "react";
import Weather from "./Weather";

import '../styles/WeatherContainer.css';




export default function WeatherBoxContainer(props){
  const [focusBox,setFocusBox] = useState(null);

  function changeFocus(id){
    setFocusBox(id);
  }

  return(
    <div className="chuj">
      <div className = "location-info">
        <span className = "location-info_city-name"> {props.location.city} </span>
        <span className = "location-info_country-code"> {props.location.country} </span>
      </div>
      <div className ='weather-container'>
        <Weather changeFocus = {changeFocus} data = {props.data[0]} id = {0} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[1]} id = {1} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[2]} id = {2} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[3]} id = {3} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[4]} id = {4} chosenBox = {focusBox} />
      </div>
    </div>
  )
}