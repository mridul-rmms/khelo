const Joi = require("joi");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

module.exports.listingSchema = Joi.object({ // goes to the route req.body only 
    listing: Joi.object({  // why we use this ?? => intresting
        title: Joi.string().required(),
        sports: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0),
        phone: Joi.string().pattern(/^[6-9]\d{9}$/),
        email: Joi.string().email().required(),
        image: Joi.string().allow("", null)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    reviews: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required(),
    })
})

const dateRule = Joi.string().custom((value, helpers) => {
    const chosen = dayjs(value, "YYYY-MM-DD", true);   // true = strict format
    if (!chosen.isValid()) {
        return helpers.message("Invalid date");
    }
    const days = chosen.diff(dayjs().startOf("day"), "day");
    if (days < 0 || days > 15) {
        return helpers.message("Date must be within the next 15 days");
    }
    return value;
});

module.exports.bookingSchema = Joi.object({
    booking: Joi.object({
        date: dateRule.required(),
        slot: Joi.string().valid("morning", "afternoon", "evening", "night").required()
    }).required()
});

module.exports.dateQuerySchema = Joi.object({
    date: dateRule
});