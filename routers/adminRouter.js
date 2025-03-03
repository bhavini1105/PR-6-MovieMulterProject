const { Router } = require("express");
const adminController = require('../controllers/adminController');

const adminRouter = Router();

adminRouter.get("/signup", adminController.singupPage);
adminRouter.get("/signin", adminController.singinPage);
adminRouter.post("/adminCreate", adminController.createAdmincredential);
adminRouter.post("/checkCred", adminController.checkCredentials);
adminRouter.get("/logout",adminController.logOut);

module.exports = adminRouter;
