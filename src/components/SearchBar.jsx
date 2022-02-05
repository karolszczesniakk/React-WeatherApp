import React, { useState } from "react";
import '../styles/SearchBar.css';

export default function SearchBar(props){

  const [inputValue, updateInputValue] = useState("");
  const handleChange = (e) => {
    updateInputValue(e.target.value);
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      props.search(inputValue);
      updateInputValue("")
    }
  }

  return (
    <input 
      className="search-bar"
      onKeyDown={handleKeyPress} 
      onChange={handleChange} 
      type="text" 
      name="input" 
      value={inputValue} 
      placeholder='Enter city name...'>
    </input>
  )
}

