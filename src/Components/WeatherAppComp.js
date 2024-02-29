import React, { useState } from 'react';
import axios from 'axios';

const WeatherAppComp = () => {
    // const {data, setData} = useState({})
    const {location, setLocation} = useState('default')
  
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8afc04d49ec33f700dde9d247f3f8e69`
  
    const handleLocationChange = (event) => {
        // setLocation({...location, name: event.target.value})
        console.log(event.target.value)
    }
    
    // const searchLocation = (event) => {
    //   if (event.key === 'Enter') {
    //     axios.get(url)
    //     .then((response) => {
    //       setData(response.data)
    //       console.log(response.data)
    //     })
    //   }
    // }
  

  return (
    <div>
        <div className='search'>
        <input type='text' 
          value={location}
          onChange={handleLocationChange}
          placeholder='Enter Location'
        //   onChange={event => setLocation(event.target.value)}
        //   onKeyDown={searchLocation} 
        />
      </div>

        <div className='container'>
            <div className='top'>
            <div className='location'>
                <p>Manila</p>
                <p>The current city is {location}</p>
            </div>
            <div className='temperature'>
                <h1>60°F</h1>
            </div>
            <div className='description'>
                <p>Rain</p>
            </div>
            </div>
            <div className='bottom'>
            <div className='feels'>
                <p className='bold'>69 °F</p>
                <p>Feels like</p>
            </div>
            <div className='humidity'>
                <p className='bold'>25%</p>
                <p>Humidity</p>
            </div>
            <div className='wind'>
                <p className='bold'>13 MPH</p>
                <p>Wind</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherAppComp
