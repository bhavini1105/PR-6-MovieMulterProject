const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
    title : String,
    thumbnail : String,
    category : String,
    description : String
},{timestamps : true});

const movieModel = mongoose.model('movieModel',movieSchema);

module.exports = movieModel;