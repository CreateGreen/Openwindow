import { useQuery } from "react-query";

const fetchWeather= async()=>{
    const data = await fetch("api/getcurrent",{
      method:"GET",
    })
    return data.json();
};

export {fetchWeather}