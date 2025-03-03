const movieModel = require("../models/movieSchema");

module.exports.indexPage = async (req, res) => {
    let movies = await movieModel.find();
    return res.render('pages/client',{movies});
}

module.exports.homePage = async(req, res) => {
    let movies = await movieModel.find();
    return res.render('pages/client',{movies});
}

module.exports.viewPage = (req,res)=>{
    return res.render('pages/about');
}

module.exports.aboutPage = async (req, res) => {
    try {
        const movieTitle = req.params.title;  
        const movie = await movieModel.findOne({ title: movieTitle }); 

        if (!movie) {
            return res.render('pages/about', { movie: [], error: "Movie not found" });
        }

        return res.render('pages/about', { movie });
    } catch (error) {
        console.error(error);
        return res.render('pages/about', { movie: [], error: "An error occurred" });
    }
};

module.exports.singlePage = async (req, res) => {
    const { id } = req.params;
  
    try {
      const movie = await movieModel.findById(id);
      res.render("pages/singleMovie", { movie });
    } catch (error) {
      console.log(error.message);
      res.render("pages/singleMovie", { movie: {} });
    }
  };

module.exports.reviewPage = async(req, res) => {

    let movies = await movieModel.find();
    return res.render('pages/review',{movies});
}

module.exports.joinusPage = (req, res) => {
    return res.render('pages/joinus');
}
module.exports.contactPage = (req, res) => {
    return res.render('pages/contact');
}