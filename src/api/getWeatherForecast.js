import axios from "axios";

export default async function getLocationData(coordinates){

  const apiKey="7dd36b5c25a1af976140eea6d1203ce9";

  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lon,
        exclude: "current,minutely,hourly,alerts",
        appid: apiKey,
        units: "metric"
      }
    }
  );




  return response;
  
  

}