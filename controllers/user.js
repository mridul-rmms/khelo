const User = require("../models/user");


module.exports.loginForm = (req, res) => {
    res.render("../views/users/login.ejs")
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to khelo");
    let redirect = res.locals.redirectUrl || req.session.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirect);
};
module.exports.signupForm =  (req, res) => {
    res.render("../views/users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                next(err);
            };
            req.flash("success", "SignUp Successful")
            res.redirect("/listings");
        })
    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup")
    }
};
module.exports.logout = (req, res) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logout Successful")
        res.redirect("/listings");
    })
}