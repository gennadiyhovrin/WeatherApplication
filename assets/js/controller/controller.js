"use strict";
export default class Controller{
    constructor(view,model){
        this.view = view;
        this.model = model;
        this.getWeather = this.getWeather.bind(this);
    }

getWeather(){
let city = this.view.mainInput.value;
this.view.mainInput.value ="";
this.model.getWeather(city);

}

    addHandle(){
        this.view.mainButton.addEventListener("click",this.getWeather);
    }
    }