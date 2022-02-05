import React from "react";
import '../styles/Location.css';

export default function Location(props){
  return (
    <div className = "location">
      <span className = "location_city-name"> {props.locationData.city} </span>
      <span className = "location_country-code"> {props.locationData.country} </span>
    </div>
  )

}