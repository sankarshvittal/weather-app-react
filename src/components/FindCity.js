/*
Component for populating the select menu and therby selecting a city
Created by: Sankarsh Vittal
*/

import React from 'react';
import './FindCity.css';

const findCity = ( props ) => {

    return (

        <div className="find-city-form">
        <h1 align="center">This weeks Weather</h1>
            <div className="form-group" align="center">
                <select  id="soflow" placeholder ="city" name="city" onChange={props.changed}>
                <option value="" disabled selected>Select a city</option>
                  <option value="97201">Portland</option>
                  <option value="78701">Austin</option>
                  <option value="44101">Cleveland</option>
                  <option value="15201">Pittsburgh</option>
                  <option value="53201">Milwaukee</option>
               </select>
            </div>
        </div>
    )
};

export default findCity;
