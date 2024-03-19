import React, { useState } from 'react'
import './Weather.css'
import Drizzling from '../Asset/Drizzling.png'
import Rain from '../Asset/Rain.png'
import Search_icon from '../Asset/loupe_1296902 (2).png'
import Strom from '../Asset/Strom.png'
import Sun_Cloud from '../Asset/Sun_Cloud.png'
import Sun from '../Asset/Sun.png'
import Humidity from'../Asset/Humidity.png'


export default function Weather() {

 let Api_Key = "cecfcccd79d9d132728e9277a0941726"

    

const Search = async()=>{
const element = document.getElementsByClassName("cityinput")
if(element[0].value ==='' ){
    return 0;
}
let Url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${Api_Key}`

let response =await fetch(Url)
let data =  await response.json()
const humidity = document.getElementsByClassName("humidity-percentage")
const wind = document.getElementsByClassName('wind-rate')
const temp = document.getElementsByClassName('weather-temp')
const location = document.getElementsByClassName('weather-location')

humidity[0].innerHTML = data.main.humidity
wind[0].innerHTML = data.wind.speed 
temp[0].innerHTML = data.main.temp
location[0].innerHTML = data.name



}



  return (
    


    <div className= 'container'>
        <div className= 'top-bar '>

    <input type="text" className= "cityinput"  placeholder='search' />
    <div className= 'searh-icon' onClick={()=>{Search()}}>
        <img src={Search_icon} alt="Search" />
    </div>
        </div>
        <div className= 'weather-image'>
            <img src={Sun_Cloud} alt=""  className= 'icon'/>
            <div className= "weather-temp">24</div>
            <div className= 'weather-location'>London</div>
            <div className= "data-container">
                <div className= "data">
                    <img src={Humidity} alt="" className= 'icon' />
                    <div className= "humidity-percentage">64%</div>
                    <div className= "text">Humidity</div>
                </div>
            </div>
        <div className= "element">
            <img src={Strom} alt=""  className= 'icon'/>
            <div className= "data">
                <div className= "wind-rate">18km</div>
                <div className= "text">Wind Speed</div>
            </div>
        </div>
        </div>
    </div>

  )
}
