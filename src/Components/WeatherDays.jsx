import React from 'react'
import { useWeather } from '../Context/WeatherContext';
function WeatherDays() {

  const { dailyWeather } = useWeather();

  // Verilen tarih dizgisinden gün adını almak için bir fonksiyon
  function getDayName(dateString) {
    const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }

  const dayName =''
  // Output: "Saturday"

  return (
    <div className='flex justify-center items-center p-2'>
      <div className='grid  gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 '>
        {

          dailyWeather?.map((day, key) => (


            day && (

              <div key={key} className='flex flex-col p-2 justify-center items-center border rounded-lg'>
                <div>
                  <p className=''>  {getDayName(`${day.date}`)} </p>
                </div>
                <div className='' >
                  <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="" />
                </div>
                <div className='text-center'>
                  <p className='text-sm'>  {day.description} </p>
                  <p>{day.temperature} °C</p>
                </div>
              </div>
            )
          ))
        }



      </div>
    </div>
  )
}

export default WeatherDays