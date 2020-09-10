"use strict";
export default class View {
    constructor() {
        //creat the main page elements
        this.appDiv = document.querySelector('#app');
        this.mainContainer = document.createElement('div');
        this.mainRow = document.createElement('div');
        this.cardRow = document.createElement('div');
        this.inputCol = document.createElement('div');
        this.submitCol = document.createElement('div');
        this.mainInput = document.createElement('input');
        this.mainButton = document.createElement('button');

        //add class and attribute for the main page elements
        this.mainContainer.className = 'container p-2';
        this.mainRow.className = 'form-row align-items-center';
        this.cardRow.className = 'row align-items-center';
        this.inputCol.className = 'col';
        this.submitCol.className = 'col-1';
        this.mainInput.className = 'form-control mb-2';
        this.mainInput.setAttribute('placeholder', 'Search city');
        this.mainButton.className = 'btn btn-primary mb-2';
    }
    //render main page
    appRender() {
        this.mainButton.innerHTML = 'Search';
        this.inputCol.append(this.mainInput);
        this.submitCol.append(this.mainButton);
        this.mainRow.append(this.inputCol, this.submitCol);
        this.mainContainer.append(this.mainRow, this.cardRow);

        this.appDiv.append(this.mainContainer);
    }
    //render card
    cardRender() {
        const clearSky = 'https://openweathermap.org/img/wn/01d@2x.png';
        const rain = 'https://openweathermap.org/img/wn/10d@2x.png';
        const overcastClouds = 'https://openweathermap.org/img/wn/04d@2x.png';
        const scatteredClouds = 'https://openweathermap.org/img/wn/03d@2x.png';
        let weatherImg = rain;
        let city = 'Dnipro';
        let weather = `Feels like 30°C. Clear sky. Gentle Breeze 5.0m/s E
       1013hPa Humidity: 20%
       UV: 6
       Dew point: 8°C
       Visibility: 10.0km`;

       //render weather
        let weatherCard = document.createElement('div');
        weatherCard.insertAdjacentHTML('afterbegin', `
        <div class="media">
        <img src="${weatherImg}" class="mr-3" alt="${city}">
        <div class="media-body">
          <h5 class="mt-0">${city}</h5>
          ${weather}
          <button type="button" class="cng btn btn-outline-primary btn-sm ml-1">
          <span aria-hidden="true">&Xi;</span>
          </button>
          <button type="button" class="del btn btn-outline-primary btn-sm ml-2">
          <span aria-hidden="true">&times;</span>
          </button>
          
          </div>
        
        </div>`);

        this.cardRow.append(weatherCard);
    }

    // getWeatherImg(img){
    //     const clearSky = 'https://openweathermap.org/img/wn/01d@2x.png';
    //     const rain = 'https://openweathermap.org/img/wn/10d@2x.png';
    //     const overcastClouds = 'https://openweathermap.org/img/wn/04d@2x.png';
    //     const scatteredClouds = 'https://openweathermap.org/img/wn/03d@2x.png';

        
    //     let image;
    //     if( img == 'Clear'){
    //     image = clearSky;
        
    //     }

    //     this.showWeatherOurCity(image);
        

    // }
//weather plagin
    showWeatherOurCity(weather) {
        
        
        let cardWeatherOurCity = document.createElement('div');
        cardWeatherOurCity.className = 'fixed-bottom';
        cardWeatherOurCity.insertAdjacentHTML('afterbegin', `
        <div class="card mb-3" style="max-width: 250px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" class="card-img" alt="${weather.weather[0].description}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${weather.name}</h5>
        <ul class="list-group list-group-flush">
  <li class="list-group-item">${weather.main.temp.toFixed(0)} °C</li>
  <li class="list-group-item">Feels like ${weather.main.feels_like.toFixed(0)}°C</li>
  <li class="list-group-item">${weather.weather[0].description.toUpperCase()}</li>
  
</ul>
        
      </div>
    </div>
  </div>
</div>
        `);

        this.appDiv.append(cardWeatherOurCity);
    }



}