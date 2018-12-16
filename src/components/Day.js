/*
Component used for displaying the weather data
Created by: Sankarsh Vittal
*/
import React from 'react';
import moment from 'moment';
import './Day.css';

const day = ( props ) => {

    return (
        <table className="days" >
            <tbody>
                <tr>
                    <td>
                      <span>{props.date}</span>
                      </td>
                </tr>
                <tr>
                    <td >
                        <img src={props.icon} />
                    </td>
                    <td >
                        <span className="temp">{props.temp} &#x2103;</span>
                    </td>
                    <td >
                        <span className="temp">{props.speed} </span>
                    </td>
                    <td >
                        <span className="temp">{props.humidity}</span>
                    </td>
                    <td >
                      <span >{props.pressure}</span>
                    </td>
                </tr>
                <tr>
                    <td className="weather">{props.weather}</td>
                </tr>
            </tbody>
        </table>

    )

};

export default day;
