import React, { FC , useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { city as cityType } from '../CityDetails';

interface TemperatureDetail{
    city: string
}
interface TemperatureData {
    max: number;
    min: number;
    avg: number;
  }

const TemperatureDetails:FC<TemperatureDetail> = ({ city}) => {
    const [temperatureData, setTemperatureData] = useState<TemperatureData>({ max: 0, min: 0 , avg: 0});

    useEffect(() => {
        if (city) {
        const cityy = cityType.find((c) => c.city === city);
        if (cityy) {
            fetchTemperature(cityy.lat, cityy.lng);
        }
        }
    }, [city]);

    const fetchTemperature = async (lat: string, lon: string) => {
        try {
        const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`
        );
        const data = response.data.daily;
        console.log("data",data)
        const maxTemperature = data.temperature_2m_max[0];
        const minTemperature = data.temperature_2m_min[0];
        const averageTemperature = (maxTemperature + minTemperature) / 2 
        console.log("temper", maxTemperature, minTemperature, averageTemperature)
        setTemperatureData({ max: maxTemperature, min: minTemperature , avg: averageTemperature });
        } catch (error) {
        console.error('Error fetching temperature data', error);
        }   

  };
const avgTemperature = useMemo(() => (temperatureData.max + temperatureData.min) / 2, [
            temperatureData.max,
            temperatureData.min,
          ]);
  return (
    <div>
      <h2>Selected City: {city}</h2>
      {(
        <div>
          <p>Max Temperature: {temperatureData.max}°C</p>
          <p>Min Temperature: {temperatureData.min}°C</p>
          <p>Average Temperature: {avgTemperature}°C</p>
        </div>
      )}
    </div>
  )
}

export default TemperatureDetails