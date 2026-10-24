const Listing = require("../models/listing.js");
const dayjs = require("dayjs");
const Booking = require("../models/booking.js");


module.exports.index = async (req, res) => {
    const { sport } = req.query;
    let filter = {};
    if (sport) {
        if (sport === "Cricket/Football") {
            filter = { sports: { $in: ["Cricket", "Football", "Cricket/Football"] } };
        } else if (sport === "Volleyball") {
            filter = { sports: { $regex: /Volleyball/i } };
        } else {
            filter = { sports: { $regex: new RegExp(sport, "i") } };
        }
    }
    const initData = await Listing.find(filter);
    res.render("listings/index.ejs", { initData, sport });
}

module.exports.newListingForm = async (req, res) => {
    let listing = req.body.listing
    const list = new Listing(listing);
    list.owner = req.user._id;
    await list.save();
    req.flash("success", "Venue Added")
    res.redirect("/listings")
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const {date} = req.query;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if (!listing) {
        req.flash("error", "Listing does not exist")
        return res.redirect("/listings")
    }
    let bookedSlots = [];
    if (date) {
        bookedSlots = await Booking.distinct("slot", { listing: id, date });
    }
    const minDate = dayjs().format("YYYY-MM-DD");
    const maxDate = dayjs().add(15, "day").format("YYYY-MM-DD");
    res.render("listings/show.ejs", { listing, date: date || "", bookedSlots, minDate, maxDate });
}

module.exports.editFrom = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    if (!listing) {
        req.flash("error", "Listing does not exist")
        return res.redirect("/listings")
    }
    res.render("listings/edit.ejs", { listing })
}

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    let listing = req.body.listing;
    await Listing.findByIdAndUpdate(id, { ...listing })
    req.flash("success", "Venue Updated")
    res.redirect(`/listings/${id}`);
}

module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Venue Deleted")
    res.redirect("/listings");
}