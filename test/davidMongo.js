var expect = require("chai").expect
  , mongoose = require('mongoose')
  , passport = require('passport');
require('../models/user');
require('../models/country');
mongoose.connect('mongodb://localhost/is217');
var Country = mongoose.model('Country');
var User = mongoose.model("User");

describe("country-api", function(){
	describe("#retrieve()", function(){
		it("specific country and stats, mexico 1930", function(){
			mexico1930 = {
				"Year": "1930",
				"Team": "Mexico",
				"ISO": "MX",
				"Goals for": "4",
				"Goals against": "13",
				"Penalties": "1",
				"Matches": "3",
				"Shots on goal": "4",
				"Shots wide": "0",
				"Free kicks": "0",
				"Offside": "0",
				"Corners": "0",
				"Won": "0",
				"Drawn": "0",
				"Lost": "3",
				"Host": "",
				"latitude": "",
				"longtitude": "",
				"_id": "5357e09501037be209000008"
			};
			var results = Country.find({Team: 'Mexico', Year: 1930}, function(err, country) {
				expect(country).to.equal(mexico1930);
			});
		});
	});
});