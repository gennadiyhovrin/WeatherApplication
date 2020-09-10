"use strict";
export default class Controller{
    constructor(view,model){
        this.view = view;
        this.model = model;
        this.getWeather = this.getWeather.bind(this);
        this.cngWeatherCard = this.cngWeatherCard.bind(this);
        this.delWeatherCard = this.delWeatherCard.bind(this);
        this.clearCity = this.clearCity.bind(this);
    }

//get city from input
getWeather(){
let city = this.view.mainInput.value;
this.view.mainInput.value ="";
this.model.getWeather(city);

}

//delete weather card
delWeatherCard(event){
    this.model.delCity(event.target.value);
    
}

//cange weather card
cngWeatherCard(event){
    this.model.editCity(event.target.value);
}

//clear weather list
clearCity(){
this.model.clearCity();
}

//add handle
    addHandle(){
        this.view.mainButton.addEventListener("click",this.getWeather);
        this.view.clearButton.addEventListener('click',this.clearCity);
        $("#app").on("click", ".del", this.delWeatherCard);
        $("#app").on("click", ".cng", this.cngWeatherCard);

    }
    }