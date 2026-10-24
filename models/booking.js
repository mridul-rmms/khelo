const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    listing:{
        type:Schema.Types.ObjectId,
        ref:"Listing",
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    slot:{
        type:String,
        enum:["morning","afternoon","evening","night"],
    },
    date:{
        type:String,
    }
},{timestamps:true});

bookingSchema.index({ listing: 1, date: 1, slot: 1 }, { unique: true })

const Booking = mongoose.model("Booking",bookingSchema);
module.exports = Booking;

