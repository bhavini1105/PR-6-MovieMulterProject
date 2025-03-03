const { Router } = require("express");

const clientController = require('../controllers/clientController');
const ClientRouter = Router()

ClientRouter.get('/index', clientController.indexPage);
ClientRouter.get('/client', clientController.homePage);
ClientRouter.get('/about', clientController.viewPage);
ClientRouter.get('/about/:title', clientController.aboutPage);
ClientRouter.get('/review', clientController.reviewPage);
ClientRouter.get('/joinus', clientController.joinusPage);
ClientRouter.get("/movierevie/:id", clientController.singlePage);
ClientRouter.get('/contact', clientController.contactPage);

module.exports = ClientRouter;