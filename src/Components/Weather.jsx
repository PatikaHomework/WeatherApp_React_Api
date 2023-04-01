import React from 'react'
import { useWeather } from '../Context/WeatherContext';
import moment from "moment";
function Weather() {

    const { WeatherData } = useWeather();
 

    return (
        <div className='flex justify-center items-center p-5 '>


            {
                WeatherData && (
                    <div className='flex flex-row gap-5 border p-5  rounded-xl shadow-lg'>

                        <div className='flex flex-col p-3' >
                            <p className='text-2xl  font-bold py-3 uppercase ' >{WeatherData.name}</p>
                            <p className='text-md '> {moment(WeatherData.dt_txt).format("DD/MM/YYYY")} </p>
                            <p className='text-3xl font-bold '>25 °C</p>
                            <p className='text-sm font-mono text-gray-500 py-2'>{WeatherData.weather[0].main}</p>
                        </div>
                        <div className='px-5 flex flex-col justify-center items-center'>
                            <img src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} alt="" />
                            <p className='text-lg font-bold text-gray-500 flex justify-center items-start capitalize py-4'>{WeatherData.weather[0].description}</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Weather