	
/*
 * GET courses.
 */

var mongoose = require('mongoose')
  , Country = mongoose.model('Country');


exports.list = function(req, res) {
  Country.find({}, function(err, countries) {
  	console.log(countries);
    res.render('countries', { 
      title: 'World Cup Countries', 
      countries: countries 
    });
 });
}

exports.jsonList = function(req, res) {
  Country.find({}, function(err, countries) {
    res.send(countries);
  });
}

exports.jsonCountry = function(req, res) {
  Country.find({Team: req.params.country}, function(err, country) {
    res.send(country);
  });
}

exports.findById = function (req, res) {
  Country.findOne({_id : req.params.id}, function(err, country) {
      res.render('country', {
      title: 'One Country',
      year: country.Year,
      team: country.Team,
      id: country._id, 
      iso: country.ISO
    });
 });
}

exports.add = function (req, res) {
  var country = new Country(req.body);
  
  country.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/countries/'+country._id);
      console.log(country);
    }

  });
}
exports.update = function (req, res) {
  Country.findOneAndUpdate({_id : req.params.id}, req.body,

  function(err, country) {
      console.log(country);
    res.redirect('/countries/');
  });
}

