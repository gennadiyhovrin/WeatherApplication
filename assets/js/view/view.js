"use strict";
export default class View {
  constructor() {
    //creat the main page elements
    this.appDiv = document.querySelector("#app");
    this.mainContainer = document.createElement("div");
    this.mainRow = document.createElement("div");
    this.cardRow = document.createElement("div");
    this.inputCol = document.createElement("div");
    this.submitCol = document.createElement("div");
    this.clearCol = document.createElement("div");
    this.mainInput = document.createElement("input");
    this.mainButton = document.createElement("button");
    this.clearButton = document.createElement("button");
    this.alertSuccess = document.createElement("div");
    this.widgetBlock = document.createElement('div');

    //add class and attribute for the main page elements
    this.mainContainer.className = "container p-2";
    this.mainRow.className = "form-row align-items-center";
    this.cardRow.className = "row align-items-start";
    this.inputCol.className = "col";
    this.submitCol.className = "col-md-2 col-lg-1 col-xl-1 col-sm-2 col-3";
    this.clearCol.className = "col-md-2 col-lg-1 col-xl-1 col-sm-2 col-3";
    this.mainInput.className = "form-control mb-2";
    this.mainInput.setAttribute("placeholder", "Search city");
    this.mainButton.className = "btn btn-outline-primary mb-2";
    this.clearButton.className = "btn btn-outline-primary mb-2";
    this.widgetBlock.className = "fixed-bottom row align-items-end";
    // this.widgetBlock.style = 'height:50px';
  }
  //render main page
  appRender() {
    this.mainButton.innerHTML = "Search";
    this.clearButton.innerHTML = "Clear";
    this.inputCol.append(this.mainInput);
    this.submitCol.append(this.mainButton);
    this.clearCol.append(this.clearButton);
    this.mainRow.append(this.inputCol, this.submitCol, this.clearCol);
    this.mainContainer.append(this.mainRow, this.cardRow);
    this.appDiv.append(this.widgetBlock);
    this.appDiv.append(this.mainContainer);
    
  }

  //render weather
  cardRender(weather) {
    this.cardRow.innerHTML = "";
    weather.forEach((value, key) => {
      let weatherCard = document.createElement("div");
      weatherCard.className = "w-100 media flex-grow-1";
      weatherCard.insertAdjacentHTML("afterbegin",
        `
        <img src="https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png" class=" mr-3"  alt="${key}">
        <div class="media-body clearfix">
        <h5 class="mt-0">${key} ${value.main.temp.toFixed(0)} °C</h5>
          
        Feels like ${value.main.feels_like.toFixed(0)}°C  |
        ${value.weather[0].description.toUpperCase()}  |
        Wind Speed ${value.wind.speed} m/s  |
        Visibility ${value.visibility / 1000} km

          <button type="button" class="float-right cng btn btn-outline-primary btn-sm ml-1" value="${key}">&Xi;</button>
          <button type="button" class="float-right del btn btn-outline-primary btn-sm ml-2" value="${key}">&times;</button>
          </div>`
      );

      this.cardRow.append(weatherCard);
    });
  }

  //weather plagin
  showWeatherOurCity(weather) {
    let favicon = document.querySelector("#favicon");
    let title = document.querySelector("#title");
    favicon.href = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    title.innerHTML = `${weather.name} ${weather.main.temp.toFixed(0)} °C`;
    this.widgetBlock.insertAdjacentHTML("afterbegin",
      `<div id = "wid2" class="col">
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item"><h5 class="card-title">${weather.name} ${weather.main.temp.toFixed(0)} °C</h5></li>
  <li class="list-group-item"><img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" class="card-img " alt="${weather.weather[0].description}"  style="height:50px;width:50px"></li>
  <li class="list-group-item">Feels like ${weather.main.feels_like.toFixed(0)}°C</li>
  <li class="list-group-item">${weather.weather[0].description.toUpperCase()}</li> 
  </ul>
  </div>
  `
);
  }

  //exchange rate plagin
  showExchangeRates(rate) {
    
    this.widgetBlock.insertAdjacentHTML(
      "afterbegin",
      `
      <div id = "wid1" class="col-auto order-2">
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item"><h5 class="card-title">Exchange Rates ${rate.ccy}</h5></li>
        <li class="list-group-item">Buy ${(+rate.buy).toFixed(2)} $</li>
        <li class="list-group-item">Sale ${(+rate.sale).toFixed(2)} $</li>
  </ul>
  </div>
  `
    );
  }

  renderAlert(msg) {
    console.log("alert");
    const mainBlock = document.querySelector("#app");
    this.alertSuccess.innerHTML = msg;
    this.alertSuccess.className = "alert alert-danger text-center mt-2 shadow";
    mainBlock.append(this.alertSuccess);
    setTimeout(() => {
      this.alertSuccess.remove();
    }, 1000);
  }
delWid(){
  let wid1 = document.querySelector("#wid1");
  let wid2 = document.querySelector("#wid2");
  
  wid1.remove();
  wid2.remove();
}

}
