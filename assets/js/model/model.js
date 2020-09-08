"use strict";

export default class Model{
constructor(view){
    this.view = view;
}
getGeolocation(){
    
    fetch('http://ip-api.com/json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      
      this.getWeatherOurCity(data.city);
    });
}
getWeatherOurCity(cityData){
    let apiKey = '54903414985ba1ac754f4d87d51323f3';
    
    console.log(cityData);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&APPID=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.view.showWeatherOurCity(data);
    //   this.view.getWeatherImg(data.weather[0].main);
    });
}

}