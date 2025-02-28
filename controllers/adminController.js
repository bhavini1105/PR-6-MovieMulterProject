const adminModel = require("../models/adminSchema");
const { use } = require("../routers/movieRouter");


module.exports.registerPage = (req, res) => {
    return res.render('pages/register'); 
};

module.exports.register = async (req, res) => {
    try {
        let { password, confirm_password } = req.body;

        console.log("Received Data:", req.body);  

        if (password === confirm_password) {
            await adminModel.create(req.body);
            
            console.log("User Created Successfully");
            return res.redirect("/login");  
        } else {
            console.log("Passwords do not match");
            return res.redirect("/register");  
        }
    } catch (error) {
        console.log("Error Occurred:", error.message);
        return res.redirect("/register"); 
    }
};

module.exports.loginPage = (req, res) => {
    return res.render("pages/login"); 
};

module.exports.login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await adminModel.findOne({ username });

        if (!user) {
            console.log("User not found");
            return res.redirect("/login");
        }

        if (user.password === password) {
            res.cookie("userId", user.id);
            console.log("User Logged In Successfully");
            return res.redirect("/index");
        } else {
            console.log("Incorrect password");
            return res.redirect("/login");
        }
    } catch (error) {
        console.log("Error during login:", error.message);
        return res.redirect("/login");
    }
};

module.exports.logout = (req, res) => {
    res.clearCookie("userId"); 
    return res.redirect("/login");
};
