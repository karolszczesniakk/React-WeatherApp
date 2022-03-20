import axios from "axios";



export default async function getCoordinates(cityName){
  const apiKey = "7dd36b5c25a1af976140eea6d1203ce9";

  const response = await axios.get(
    "https://api.openweathermap.org/geo/1.0/direct?",
    {
      params: {
        q: cityName,
        limit: 5,
        appid: apiKey
      }
    }
  );
  return response;
}