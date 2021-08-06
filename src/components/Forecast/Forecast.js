import Conditions from './Conditions/Conditions';
import React, { useState } from 'react';

const Forecast = () => {
   let [city, setCity] = useState('');
   let [unit, setUnit] = useState('imperial');
   let [responseObj, setResponseObj] = useState({});

   const uriEncodedCity = encodeURIComponent(city);
   function getForecast(e) {
      e.preventDefault();
      // weather data fetch function will go here
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5bbd2d3581msha0943fcedeb0ab9p199df7jsn12caee8fea5d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
   }
   return (
       // JSX code will go here
       <div>
           <h2>Find Current Weather Conditions</h2>
           
           
           <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button type="submit">Get Forecast</button>
            </form>
           <Conditions
               responseObj={responseObj}
               />
       </div>
   )
}
export default Forecast;