import React, { useRef } from "react";
import "../styles/SearchBar.css";

function SearchBar(props) {
  const inputRef = useRef();
  console.log("reavaluted searchbar");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.search(inputRef.current.value);
      inputRef.current.value = "";
      /* 
      manipulating DOM directly is bad practice
      but in this case I believe it's fine
      */
    }
  };
  return (
    <input
      className="search-bar"
      onKeyDown={handleKeyPress}
      ref={inputRef}
      type="text"
      name="input"
      placeholder="Enter city name..."
    ></input>
  );
}

export default React.memo(SearchBar);
