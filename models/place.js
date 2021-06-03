const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: String,
    price: String,
    dishes: [String],
    description: String,
    location: String
});

module.exports = mongoose.model('Place', placeSchema);

//Collection named 'places' is defined and created