'use strict';

const $ = require('jquery');
const _ = require('lodash');
require('handlebars');

let asteroidName = "Big Asteroid";

$.ajax({
    url: `http://foaas.com/shutup/:${asteroidName}/:Eli`
})
.done( (asteroid) => {
    $("#output").after(asteroid);
    console.log(asteroid);
});