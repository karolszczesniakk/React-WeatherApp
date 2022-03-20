import React, { useEffect, useState, useCallback } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Loading from "./components/Loading";

import getCoordinates from "./api/getCoordinates";
import getLocationData from "./api/getLocationData";
import getWeatherForcast from "./api/getWeatherForecast";

import "./styles/App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [renderState, setRenderState] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  const queryHandler = useCallback((searchPhrase) => {
    setQuery(searchPhrase);
  }, []);

  useEffect(() => {
    async function fetchData(position) {
      try {
        const { latitude: lat, longitude: lon } = position.coords;
        const res = await getLocationData({ lat, lon });

        setRenderState("Loading");
        setLocationData({
          country: res.data[0].country,
          city: res.data[0].name,
        });

        setCoordinates({ lat, lon });
      } catch (err) {
        console.log(err);
        setRenderState("Error");
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchData);
    }

  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (query === "") return;
        const coordsResponse = await getCoordinates(query);
        const { lat, lon } = coordsResponse.data[0];
        const locationResponse = await getLocationData({ lat, lon });
        setRenderState("Loading");
        setLocationData({
          country: locationResponse.data[0].country,
          city: locationResponse.data[0].name,
        });

        setCoordinates({ lat, lon });
      } catch (err) {
        console.log(err);
        setRenderState("Error");
      }
    }

    fetchData();
  }, [query]);

  useEffect(() => {
    if (Object.keys(coordinates).length === 0) return;
    async function fetchData() {
      try {
        const res = await getWeatherForcast(coordinates)
        setWeatherData(res.data.daily);
        setRenderState("Ready");
      } catch (err) {
        console.log(err);
        setRenderState("Error");
      }
    }
    fetchData();
  }, [coordinates]);

  let content;

  if (renderState === "Loading") {
    content = <Loading />;
  }
  if (renderState === "Ready") {
    content = <WeatherContainer data={weatherData} location={locationData} />;
  }
  if (renderState === "Error") {
    content = <Error query={query} />;
  }

  return (
    <div className="app-container">
      <Header />
      <SearchBar search={queryHandler} />
      {content}
      <Footer />
    </div>
  );
}
