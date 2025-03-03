const movieModel = require("../models/movieSchema");
const fs = require('fs');
const path = require('path');

module.exports.viewMovie = (req,res)=>{
    return res.render('pages/client');
}

module.exports.homePage = (req, res) => {
    return res.render('index');
};

module.exports.movieForm = (req,res)=>{
    return res.render('pages/movieForm');
}

module.exports.form = async(req, res) => {
    try {
        let movies = await movieModel.create({ ...req.body, thumbnail: req.file.path });
        console.log(req.file.path);
        console.log(req.body);
        return res.render('pages/movieForm', { movies });
    } catch (error) {
        console.log(error.message);
        return res.render('pages/movieForm', { movies : [] });
    }
}

module.exports.viewMovie = async(req, res) => {
    try {
        const movies = await movieModel.find();
        return res.render('pages/viewMovies',{movies});
    } catch (error) {
        console.log(error.message);
        return res.render('pages/viewMovies',{movies : []});
    }
}

module.exports.deleteMovie = async (req, res) => {
    try {
        let { id } = req.params;
        let movie = await movieModel.findByIdAndDelete(id);
        fs.unlinkSync(movie.thumbnail);
        console.log("Deleted Sucessfull....");
        return res.redirect('/viewMovies');

    } catch (error) {
        console.log(error.message);
        return res.redirect('/viewMovies');
    }
}

module.exports.editMovie = async (req, res) => {  
    try {
        let { id } = req.params;
        let movies = await movieModel.findById(id);

        if(movies){
            return res.render('pages/edit', { movies });
        }
        else{
        return res.render('pages/edit', { movies: [] });
        }

    } catch (error) {
        console.log(error.message);
        return res.render('pages/edit', { movies: [] });
    }
};

module.exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      let updateData = { ...req.body };
  
      if (req.file) {
        const movie = await movieModel.findById(id);
        fs.unlinkSync(movie.thumbnail);
        updateData.thumbnail = req.file.path;
      } else {
        updateData.thumbnail = req.body.old_thumbnail;
      }
  
      await movieModel.findByIdAndUpdate(id, updateData);
      return res.redirect('/viewMovies');
    } catch (error) {
      console.log(error.message);
      return res.redirect('/viewMovies');
    }
  };