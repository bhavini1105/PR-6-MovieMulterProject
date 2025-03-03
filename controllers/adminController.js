const adminModel = require("../models/adminSchema");


module.exports.singupPage = (req, res) => {
    res.render("pages/signup");
  };
  
  module.exports.singinPage = (req, res) => {
    res.render("pages/signin");
  };


module.exports.createAdmincredential = async (req, res) => {
    let { password, confirm_password } = req.body;
  
    if (password === confirm_password) {
      await adminModel.create(req.body);
      res.render("./pages/signin", req.body);
    } else {
      console.log("Password & Confirm Password should be same!");
      res.render("./pages/signin", req.body);
    }
  };
  
  module.exports.checkCredentials = async (req, res) => {
    const { username, password } = req.body;
  
    let cred = await adminModel.findOne({ username });
  
    if (!cred) {
      console.log("User not found!");
      return res.redirect("/signin");
    }
  
    if (cred.username === username && cred.password === password) {
      res.cookie("userId", cred.id);
      return res.render("index");
    } else {
      console.log("Invalid credentials!");
      return res.redirect("/signin");
    }
  };
  
  
  module.exports.logOut = (req, res) => {
    res.clearCookie("userId");
    return res.redirect("/signin");
  };