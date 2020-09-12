"use strict";

export default class Model {
  constructor(view) {
    this.weather = new Map();
    this.view = view;
    this.apiKey = "54903414985ba1ac754f4d87d51323f3";
  }

  // get geolocation
  getGeolocation() {
    fetch("http://ip-api.com/json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.getWeatherOurCity(data.city);
      })
      .catch((err) => console.log("Request Failed", err));
  }
  startWidget() {
    
    this.getRate();
    this.getGeolocation();
  }

  // get weather for weather plagin
  getWeatherOurCity(cityData) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&APPID=${this.apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.view.showWeatherOurCity(data);
        
      })
      .catch((err) => console.log("Request Failed", err));
  }

  //get USD Rate
  getRate() {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.view.showExchangeRates(data[0]);
      })
      .catch((err) => console.log("Request Failed", err));
  }

  // find weather
  getWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`
    ).then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        this.view.renderAlert("This city does not exist");

        return;
      }

      response.json().then((data) => {
        if (!this.weather.has(data.name)) {
          this.setWeather(data.name, data);

          this.renderWeatherCard();
        } else {
          this.view.renderAlert("This city has already been added");
        }
      });
    });
  }
 // render weather card
  renderWeatherCard() {
    this.view.cardRender(this.weather);
  }

  //save city in DB
  setWeather(city, data) {
    this.weather.set(city, data);
    localStorage.setItem("weather", JSON.stringify([...this.weather.keys()]));
    
  
  }
  // delete city
  delCity(city) {
    
    this.weather.delete(city);
    localStorage.setItem("weather", JSON.stringify([...this.weather.keys()]));
    this.renderWeatherCard();
  }
//edit city
  editCity(city) {
    this.weather.delete(city);
    localStorage.setItem("weather", JSON.stringify([...this.weather.keys()]));
    this.view.mainInput.value = city;
  }
//clear city list
  clearCity() {
    this.weather.clear();
    localStorage.setItem("weather", JSON.stringify([...this.weather.keys()]));
    this.renderWeatherCard();
    console.log("clear city");
  }
 // init weather card at render ui
  initWeather(){
    let db = JSON.parse(localStorage.getItem("weather"));
    db.forEach((value) => {
    this.getWeather(value);
    console.log(value);
    });
    
    console.log(db);
    console.log(this.weather);  
    
    
  }
}
