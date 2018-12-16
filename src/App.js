/*
ISTE.754.01 Project 3
Created by: Sankarsh Vittal
*/

import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './App.css';
import Days from './components/Days';
import FindCity from './components/FindCity';



import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
  constructor(props) {
  		super(props);
  		this.state = {
  			list : [],
  			message : 'no data'
  		}
  	}

  	handleChange = (event) => {

           let showForDays = [];
           for(let i = 0; i <= 5; i++) {
             showForDays.push(moment().add(i, 'days').format("YYYY-MM-DD") + " 15:00:00");
           }
           // Making use of axios library to handle the REST API call 
            axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=' + event.target.value + '&units=metric&lang=hr&appid=bf7b884c9a2cf18ec4d3e0a7aee70612').then(response => {

             let list = response.data.list;
             let forecastList = [];

             for(let i = 0; i < list.length; i++) {
               if(showForDays.includes(list[i].dt_txt)) {
                 forecastList.push(list[i]);
               }
             }
             this.setState({
               list : forecastList
             });
           }).catch((error) => {
             this.setState({
               message : error.response.data.message
             });
           });
  	}

	render() {

  	return (

    //Created routes for handiling the home about menu bar options routing
     <Router>
        <div >
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'white' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color:'white' }
            }>About</NavLink>
          </li>

          </ul>

        <Route path="/" exact strict render={
          () => {
            return (
             <div>
              <FindCity
  					changed={this.handleChange}
  					 />
             <Days
               key="1"
               days={this.state.list} />
  			     </div>
        );
          }
        }/>
        <Route path="/about" exact strict render={
          () => {
            return (
              <div className="about">
                        <h1>5 Day Weather App</h1><p2> A weather app for getting the five day weather forcast</p2><p>Created by: Sankarsh Vittal</p>
                  </div>
            );
          }
        }/>


        <Route path="/~sv6265/Weather/" exact strict render={
          () => {
            return (
             <div>
              <FindCity
            changed={this.handleChange}
             />
             <Days
               key="1"
               days={this.state.list} />
             </div>
        );
          }
        }/>
		
		
		<Route path="/build/index.html" exact strict render={
          () => {
            return (
             <div>
              <FindCity
            changed={this.handleChange}
             />
             <Days
               key="1"
               days={this.state.list} />
             </div>
        );
          }
        }/>
		
        </div>
      </Router>

  		);
    }
  }

  export default App;
