const userAuth = (req, res, next) => {
    let { userId } = req.cookies;

    if (userId) {
        return next();
    }

    return res.redirect("/login"); 
};

module.exports = userAuth;
