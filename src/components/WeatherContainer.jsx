import React, { useState } from "react";
import Weather from "./Weather";
import Location from "./Location";

import '../styles/WeatherContainer.css';

export default function WeatherBoxContainer(props){
  const [focusBox,setFocusBox] = useState(null);

  function changeFocus(id){
    setFocusBox(id);
  }

  return(
    <div className="weather-container">
      <Location locationData={props.location}/>
      <div className ='weather-table'>
        <Weather changeFocus = {changeFocus} data = {props.data[0]} id = {0} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[1]} id = {1} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[2]} id = {2} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[3]} id = {3} chosenBox = {focusBox} />
        <Weather changeFocus = {changeFocus} data = {props.data[4]} id = {4} chosenBox = {focusBox} />
      </div>
    </div>
  )
}