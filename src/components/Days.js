/*
Component used populating the weather data to be displayed
Created by: Sankarsh Vittal
*/

import React from 'react';
import moment from 'moment';
import Day from './Day';

const days = (props) => props.days.map( ( day, index ) => {

        return <Day key={index}
            dt={day.dt_txt}
            icon={"http://openweathermap.org/img/w/" + day.weather[0].icon + ".png"}
            weather={day.weather[0].main}
            temp={"Temp: " + Math.round(day.main.temp) }
            humidity={"Humidity: "+ day.main.humidity + " %"}
            speed={"Wind speed: "+ day.wind.speed + " mph"}
            date = {moment.unix(day.dt).format("MM/DD/YYYY")}
            pressure = {"Atmospheric Pressure: "+ day.main.pressure + " hPa"}

            />
      } );

export default days;
