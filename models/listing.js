const mongoose = require("mongoose");
const Review = require("./review")
const locationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sports: String,
    description: String,
    price: Number,
    phone: Number,
    email: String,
    image: {
        type: String,
        default: "https://www.revturf.com/wp-content/uploads/2022/05/Turf-football-gound-IMG_5312-2-1536x1152.jpg",
        set: (v) => v === "" ? "https://www.revturf.com/wp-content/uploads/2022/05/Turf-football-gound-IMG_5312-2-1536x1152.jpg" : v
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

locationSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ id: { $in: listing.reviews } })
    }
})

const Listing = mongoose.model("Listing", locationSchema);
module.exports = Listing;