'use strict';

const $ = require('jquery');
const _ = require('lodash');
require('handlebars');


let key = "BD20DH5hG2zOtyX4341zxAErvZ6PkdX6md1YvXUH";
let startDate = "2018-09-07"; // yyyy-mm-dd
let endDate = "2018-09-10"; // yyyy-mm-dd

module.exports.getAsteroids = () => {
    console.log("this is asteroids!");
    return new Promise( (resolve, reject) => {
    $.ajax({
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${key}`
    })
    .done( (test) => {
        console.log(test);
    });
});
};
