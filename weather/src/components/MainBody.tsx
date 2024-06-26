import React, { useEffect } from 'react'
import axios from 'axios';

const MainBody = () => {

    useEffect(() => {
        
        const response = axios.get(`https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1`)
        
      return () => {
        
      }
    }, [])
    

    
  return (
    <div>

    </div>
  )
}

export default MainBody         