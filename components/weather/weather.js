import React, { useState } from "react";

export default function Weather() {
const [displyCountry, setCountry] = useState('india')
const [displyCty, setCty] = useState('kolkata')
  function country(event){
    setCountry(event.target.value)
  }
  function city(event){
    setCty(event.target.value)
   }
  const [weatherData, setWeatherData] = useState(null);

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${displyCty},${displyCountry}&APPID=383db59bd220c3dc63f9ad7a35cc73da`
      );
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <main>
        <input type="text" className={'form-control'} onChange={country} placeholder="please enter the country name" />
        <input type="text" className={'form-control'} onChange={city} placeholder="please enter the city name" />
        {/* Display the button only if weatherData is null */}
        <button className={'btn btn-primary'} onClick={callAPI}>Make API Call</button>
        
        {/* Display weather data */}
        {weatherData && (
          <div>
            <h1>{weatherData.name}</h1>
            <p>Temperature: {weatherData.main.temp}°C</p>
            {/* Add more details as needed */}
          </div>
        )}
      </main>
    </div>
  );
}
