
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const session = require("express-session");
const flash = require("connect-flash");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");
const passport = require("passport");
const LocalStratergy = require("passport-local");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public"))); // to serve static files

//connnecting khelo database using mongoose
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/khelo');
}

//using express session
const sessionOption = {
    secret: "secretstring",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}
app.use(session(sessionOption));

//using passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//using connect-flash
app.use(flash())
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

const listingRouter = require("./routes/listings.js")
const reviewRouter = require("./routes/reviews.js")
const userRouter = require("./routes/users.js")
const bookingRouter = require("./routes/bookings.js")

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/", bookingRouter )

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", wrapAsync(async (req, res) => {
    const featuredListings = await Listing.find({}).limit(6);
    res.render("home.ejs", { featuredListings });
}));

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));  // if a route not present in our above route comes
})

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.render("error.ejs", { status, message })
})

app.listen(3000, () => {
    console.log("server started ")
})