import React, { useState } from 'react';
import axios from 'axios';

const WeatherAppComp = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    // const [background, setBackground] = useState
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8afc04d49ec33f700dde9d247f3f8e69`
  
    const searchLocation = (event) => {
      if (event.key === 'Enter') {
        axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setLocation('')
      }
    }

  return (
    <div>
        <div className='search'>
        <input type='text' 
          value={location}
          placeholder='Enter Location'
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation} 
        />
      </div>

        <div className='container'>
            <div className='top'>
            <div className='location'>
                <p>{data.name}</p>
            </div>
            <div className='temperature'>
                { data.main ? <h1> {data.main.temp} °C</h1> : null }
                {/* <h1>{data.main.temp}</h1> */}
            </div>
            <div className='description'>
                { data.weather ? <p>{data.weather[0].main}</p> : null }
            </div>
            </div>
            
          {data.name != undefined &&
             <div className='bottom'>
            <div className='feels'>
                { data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null }
                <p>Feels like</p>
            </div>
            <div className='humidity'>
                { data.main ? <p className='bold'>{data.main.humidity}%</p> : null }
                <p>Humidity</p>
            </div>
            <div className='wind'>
                { data.wind ? <p className='bold'>{data.wind.speed} KPH</p> : null }
                <p>Wind</p>
            </div>
            </div>
          }           
        </div>
    </div>
  )
}

export default WeatherAppComp
