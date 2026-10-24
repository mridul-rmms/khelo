const Booking = require("./models/booking");
const Listing = require("./models/listing");
const Review = require("./models/review");
const wrapAsync = require("./utils/wrapAsync");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        if (req.method === "GET") {
            req.session.redirectUrl = req.originalUrl;
        } else if (req.params.id) {
            req.session.redirectUrl = `/listings/${req.params.id}`;
        }
        req.flash("error", "Login Required")
        return res.redirect("/login")
    }
    next();
}

module.exports.redirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    };
    next();
}

module.exports.isOwner = async (req,res,next)=>{
    let{id}=req.params;
    let listing = await Listing.findById(id)
    if(!res.locals.currUser._id.equals(listing.owner)){
        req.flash("error"," You are not the Owner of this Venue ");
        return res.redirect(`/listings/${id}`)
    }
    next();
}

module.exports.isReviewAuthor = async (req,res,next)=>{
    let{id,reviewId}=req.params;
    let review = await Review.findById(reviewId)
    if(!res.locals.currUser._id.equals(review.author)){
        req.flash("error"," You are not the Author of this Review ");
        return res.redirect(`/listings/${id}`)
    }
    next();
}

module.exports.isBooked = wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const { slot, date } = req.body.booking;
    const booking = await Booking.exists({ listing: id, slot, date });
    if (booking) {
        req.flash("error", "This slot is already booked, please choose another");
        return res.redirect(`/listings/${id}?date=${date}`);
    }
    next();
});