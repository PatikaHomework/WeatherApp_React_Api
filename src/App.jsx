import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Weather from './Components/Weather'
import WeatherDays from './Components/WeatherDays'
import { WeatherProvider } from './Context/WeatherContext'
function App() {

  return (
    <div className=" bg-white w-full bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex justify-center items-center ">
      <div className='   flex flex-col p-10  border shadow-lg  backdrop-blur-sm bg-white/30 justify-center items-center  rounded-xl'>
 
        <WeatherProvider>
          <Header />
          <Weather />
          <WeatherDays />
        </WeatherProvider>
      </div>
    </div>
  )
}

export default App
