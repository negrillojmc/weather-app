import './App.css'
import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const {data, setData} = useState({})
  const {location, setLocation} = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8afc04d49ec33f700dde9d247f3f8e69`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }


  return (
    <div className="App">
      <div className='search'>
        <input type='text' 
          placeholder='Enter Location'
          value={location} 
          onChange={event => setLocation(event.target.value)} 
          onKeyDown={searchLocation} 
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Manila</p>
            <p>The current city is: {location}</p>
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
  );
}

export default App;
