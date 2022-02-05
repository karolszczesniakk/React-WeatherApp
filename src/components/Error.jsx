import React from "react";
import '../styles/Error.css';

export default function Error(props){
  return (
    <div className="error">
      <h1>Didn't find location with the name of {props.query}</h1>
    </div>
  )
}
