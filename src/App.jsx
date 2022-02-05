import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherContainer from './components/WeatherContainer';
import Footer from './components/Footer';
import Error from './components/Error';
import Loading from './components/Loading';

import getCoordinates from './api/getCoordinates';
import getLocationData from './api/getLocationData';
import getWeatherForcast from "./api/getWeatherForecast"

import './styles/App.css';

export default function App(){
  const [query, setQuery] = useState("");
  const [render, setRender] = useState("");
  const [coordinates,setCoordinates] = useState({});
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchData(position){
      try{
        const {latitude: lat, longitude: lon} = position.coords;
        const res = await getLocationData({lat,lon});

        setRender("Loading");
        setLocationData({
          country: res.data[0].country,
          city: res.data[0].name
        });

        setCoordinates({lat,lon});

      } catch(err) {
        console.log(err);
        setRender("Error");
      }
    }

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(fetchData);
    }

  },[])

  useEffect(() => {
    async function fetchData(){
      try {
        if(query==="") return;
        console.log("query not null");
        const coordsResponse = await getCoordinates(query);
        const {lat,lon} = coordsResponse.data[0];
        const locationResponse = await getLocationData({lat,lon});
        setRender("Loading");
        setLocationData({
          country: locationResponse.data[0].country,
          city: locationResponse.data[0].name
        });
        
        setCoordinates({lat,lon});

      } catch (err){
        setRender("Error");
      }
    }

    fetchData();
  },[query]);

  useEffect(() => {
    if(Object.keys(coordinates).length === 0) return;
    getWeatherForcast(coordinates)
      .then(res => {
        setWeatherData(res.data.daily);
        setRender("Ready");
      })
  },[coordinates])

  return (
  <div className="app-container">
    <Header/>
    <SearchBar search={setQuery}/>

      { render === "Loading" 
      ? <Loading/>
      : null }

      { render === "Ready"
      ? <WeatherContainer data={weatherData} location={locationData} />
      : null }

      { render === "Error"
      ? <Error query={query}/>
      : null }

    <Footer/>
  </div>
  )
}





