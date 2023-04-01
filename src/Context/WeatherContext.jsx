import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const WheatherContext = createContext()

export const WeatherProvider = ({ children }) => {

    // Şehir adı için state
    const [city, setCity] = useState('istanbul')

    // Anlık hava durumu verisi için state
    const [WeatherData, setWeatherData] = useState()

    // Günlük hava durumu verileri için state
    const [WeatherDaysData, setWeatherDaysData] = useState()

     // Anlık hava durumu verisi için API çağrısı
    useEffect(() => {
        const api = "84a3d488b6994ecd0989a99c995aaf0b"
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=${api}`
        axios(URL).then(res => setWeatherDaysData(res.data)).catch((e) => alert("Please Enter valid City Name"))
    }, [city])

    // Günlük hava durumu verileri için API çağrısı
    useEffect(() => {
        const api = "84a3d488b6994ecd0989a99c995aaf0b"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${api}`
        axios(URL).then(res => setWeatherData(res.data)).catch((e) => alert("Please Enter valid City Name"))
    }, [city])

        // Günlük hava durumu verilerinden sadece gündüzleri seçmek için map fonksiyonu
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

// WeatherContext'i kullanmak için bir özel kancayı (hook) sağlama
export const useWeather = () => useContext(WheatherContext)