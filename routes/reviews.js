const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const { reviewSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const{isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { postReview, deleteReview } = require("../controllers/review.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg))
    } else {
        next();
    }
}

router.post("/",isLoggedIn ,validateReview, wrapAsync(postReview));

// delete req
router.delete("/:reviewId",isLoggedIn ,isReviewAuthor,wrapAsync(deleteReview));

module.exports = router;