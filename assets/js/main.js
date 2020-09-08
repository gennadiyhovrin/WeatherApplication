"use strict";
import Model from './model/model.js';
import Controller from './controller/controller.js';
import View from './view/view.js';

let view = new View();
let model = new Model(view);
let controller = new Controller();
model.getGeolocation();

view.appRender();
view.cardRender();
view.cardRender();
view.cardRender();


