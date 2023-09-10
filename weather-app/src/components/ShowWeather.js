import React from 'react'
import ReactWeather , {useOpenWeather} from 'react-open-weather'
import { useAPI } from '../contexts/APIContext'
import dotenv from 'dotenv'
function ShowWeather() {
  dotenv.config();
  const {language, weather} = useAPI();
  const {data, isLoading, errorMessage} = useOpenWeather({
    key: process.env.API_KEY,
    lang : language,
    unit : 'metric'
  })
  return (
    <ReactWeather
    isLoading={isLoading}
    errorMessage={errorMessage}
    data={data}
    lang={language}
    locationLabel= {weather}
    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    showForecast
    />
  )
}

export default ShowWeather