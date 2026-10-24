const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const { listingSchema,dateQuerySchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const { index, newListingForm, showListing, editFrom, edit, destroy } = require("../controllers/listing.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg))
    } else {
        next();
    }
}

const validateDateQuery = (req, res, next) => {
    const { error } = dateQuerySchema.validate({ date: req.query.date });
    if (error) {
        req.flash("error", error.details[0].message);
        return res.redirect(`/listings/${req.params.id}`);
    }
    next();
};

// index routes
router.get("/", wrapAsync(index));

//new route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
})

//create route
router.post("/", validateListing, wrapAsync(newListingForm));

//show route
router.get("/:id", validateDateQuery,wrapAsync(showListing));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(editFrom));
// update route
router.put("/:id",isLoggedIn,isOwner, validateListing, wrapAsync(edit));

// delete route
router.get("/:id/destroy", isLoggedIn, isOwner,wrapAsync(destroy));

module.exports = router;