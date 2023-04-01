import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const WheatherContext = createContext()

export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState('istanbul')
    const [WeatherData, setWeatherData] = useState()
    const [WeatherDaysData, setWeatherDaysData] = useState()


    useEffect(() => {
        const api = "84a3d488b6994ecd0989a99c995aaf0b"
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=${api}`
        axios(URL).then(res => setWeatherDaysData(res.data)).catch((e) => alert("Please Enter valid City Name"))
    }, [city])
    useEffect(() => {
        const api = "84a3d488b6994ecd0989a99c995aaf0b"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${api}`
        axios(URL).then(res => setWeatherData(res.data)).catch((e) => alert("Please Enter valid City Name"))
    }, [city])

    
    const dailyWeather = WeatherDaysData?.list?.map((day, index) => {
        if (index % 8 !== 0) return null // her 8 saatte bir hava durumu bilgisi var, diğerlerini atla
        return {
            date: day.dt_txt.slice(0, 10), // tarihi YYYY-MM-DD formatında al
            temperature: day.main.temp, // sıcaklık
            description: day.weather[0].description, // açıklama
            icon: day.weather[0].icon // hava durumu ikonu
        }
    })

  

    const values = {
        city,
        setCity,
        WeatherData,
        setWeatherData,
        WeatherDaysData,
        dailyWeather

    }

    return (

        <WheatherContext.Provider value={values}>{children}</WheatherContext.Provider>
    );
}

export const useWeather = () => useContext(WheatherContext)