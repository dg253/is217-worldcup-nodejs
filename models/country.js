var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Course Schema
 */
var CountrySchema = new Schema({
  Year: String, 
  Team: String,
  ISO: String,
  shotsOnGoal: String
});

mongoose.model('Country', CountrySchema, 'wc');