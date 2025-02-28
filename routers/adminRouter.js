const { Router } = require("express");
const adminController = require('../controllers/adminController');

const adminRouter = Router();

adminRouter.get('/register', adminController.registerPage);
adminRouter.post('/register', adminController.register);
adminRouter.get('/login', adminController.loginPage);
adminRouter.post('/login',adminController.login);

module.exports = adminRouter;
