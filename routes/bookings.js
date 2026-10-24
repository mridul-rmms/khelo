const express = require("express");
const router = express.Router({ mergeParams: true });
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { bookingSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isBooked } = require("../middleware");


const validateBooking = (req, res, next) => {
    let { error } = bookingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg))
    } else {
        next();
    }
}

router.post("/listings/:id/booking", isLoggedIn, validateBooking, isBooked, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { slot, date } = req.body.booking;

    try {
        await Booking.create({ listing: id, user: req.user._id, slot, date });
        req.flash("success", "Slot booked!");
    } catch (e) {
        if (e.code === 11000) {
            req.flash("error", "That slot was just taken, please choose another");
        } else {
            throw e;
        }
    }
    res.redirect(`/listings/${id}`);
}));
module.exports = router;


