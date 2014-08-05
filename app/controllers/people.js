'use strict';
var Person = require('../models/person');
var request = require('request');

exports.index = function(req, res){
  Person.all(function(err, people){
    res.render('people/index', {people:people});
  });
};
/*var zip = Person.zipcode;
var url = 'http://api.wunderground.com/api/067e021a41cde59a/conditions/q/' + zip + '.json';
request(url, function(error, response, forecast){
  forecast = JSON.parse(forecast);
  var temp = forecast.current_observation.temp_f;
});
console.log(temp);*/
