const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.postReview = async (req, res) => {
    let { id } = req.params;
    let result = new Review(req.body.reviews);
    result.author =res.locals.currUser._id;
    let listing = await Listing.findById(id);
    listing.reviews.push(result);
    await result.save();
    await listing.save();
    console.log("done");
    req.flash("success", "Review Added")
    res.redirect(`/listings/${id}`)
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted")
    res.redirect(`/listings/${id}`)
}
