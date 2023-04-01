import React, { useState } from 'react'
import { useWeather } from '../Context/WeatherContext';
import Citys from './Citys';
function Header() {

    const { setCity, city } = useWeather();

    const hunleSubmit = () => {
        console.log(city);
    }

    return (
        <div className='w-full p-0' >
            <form action="" className='text-center px-5' onSubmit={hunleSubmit} >

                <label htmlFor="countries" className="block p-2 text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">SELECT A CİTY</label>
                <div className='flex flex-row'>

                    <select id="countries"value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-teal-500-500 outline-none focus:border-teal-500 block w-full p-2.5">
                        <option value={city}selected>{city}</option>
                        {

                            Citys?.map((city, key) => (

                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))
                        }

                    </select>
{/*                     <button type='submit' className='py-2.5 px-4 border  rounded-lg bg-teal-500 text-white hover:border-teal-500 hover:bg-white hover:text-black text-center '>ara</button>
 */}                </div>  
            </form>
        </div>
    )
}

export default Header