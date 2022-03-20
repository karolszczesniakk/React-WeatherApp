import axios from "axios";


export default async function getLocationData(coordinates){

  const apiKey="7dd36b5c25a1af976140eea6d1203ce9";
  const response = await axios.get(
    "https://api.openweathermap.org/geo/1.0/reverse?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lon,
        appid: apiKey
      }
    }
  );
  
  return response;
}