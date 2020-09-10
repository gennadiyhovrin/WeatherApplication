"use strict";

export default class Model{
constructor(view){
  this.weather = [];
    this.view = view;
    this.apiKey = '54903414985ba1ac754f4d87d51323f3';

}

// get geolocation
getGeolocation(){
    
    fetch('http://ip-api.com/json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      
      this.getWeatherOurCity(data.city);
    }).catch(err => console.log('Request Failed', err));
}

// get weather for weather plagin
getWeatherOurCity(cityData){
    
    
    console.log(cityData);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&APPID=${this.apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.view.showWeatherOurCity(data);
    //   this.view.getWeatherImg(data.weather[0].main);
    });
}

getWeather(city){

console.log(city);
}

setWeather(city){
  
  this.weather.push(city);
}

}