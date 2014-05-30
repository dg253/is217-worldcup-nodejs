
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Country = mongoose.model('Country');


exports.index = function(req, res) {
/*Add new country
  var country = new Country();
      country.year = 2014;
      country.team = 'Brazil';
      country.iso = 'BR';
      country.shotsOnGoal = 50;
      country.save(function (err) {
        console.log(err);
      });
*/

  Country.find({}, function(err, countries) {
    res.render('index', { 
      title: 'World Cup Statistics', 
      countries: countries 
    });
 });
}
