"use strict";
import Model from './model/model.js';
import Controller from './controller/controller.js';
import View from './view/view.js';

let view = new View();
let model = new Model(view);
let controller = new Controller(view,model);
model.getGeolocation();

view.appRender();

controller.addHandle();



