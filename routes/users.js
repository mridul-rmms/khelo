const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const LocalStratergy = require("passport-local");
const { redirectUrl } = require("../middleware.js");
const { signupForm, signup, loginForm, login, logout } = require("../controllers/user.js");

//signup user
router.get("/signup",signupForm)
router.post("/signup", wrapAsync(signup));

//login user 
router.get("/login", loginForm)
router.post("/login", redirectUrl,
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    wrapAsync(login));

//logout
router.get("/logout", logout)

module.exports = router;