const { Router } = require("express");
const movieController = require("../controllers/movieController");
const imageUpload = require("../middlewares/imageUploads");
const userAuth = require("../middlewares/userAuthentication");

const movieRouter = Router();

movieRouter.get("/", movieController.viewMovie);


movieRouter.use(userAuth);
movieRouter.get("/admin", movieController.homePage);
movieRouter.get("/movieForm", movieController.movieForm);
movieRouter.post("/created", imageUpload, movieController.form);
movieRouter.get("/viewMovies", movieController.viewMovie);
movieRouter.get("/delete/:id", movieController.deleteMovie);
movieRouter.get("/edit/:id",  movieController.editMovie);
movieRouter.post("/update/:id", imageUpload, movieController.update);

module.exports = movieRouter;
