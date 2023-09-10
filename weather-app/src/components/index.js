import React from 'react'
import { useAPI } from '../contexts/APIContext';
function Weather() {
  const {weather,setWeather}= useAPI();
  return (
    <>
    <form>
      <input type="text" name='city' value={weather} onChange={(e) => setWeather(e.target.value)} />
      <button type='submit'>Ara</button>
    </form>
  </>
)
}

export default Weather