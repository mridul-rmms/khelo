const mongoose = require("mongoose");
const initdata = require("./data.js");

const Listing = require("../models/listing.js")


main().then(() => {
    console.log("Database connected")
}).catch((err) => {
    console.log(err)
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/khelo');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) =>({...obj,owner:"6ac63305a7cabb4f583cf04a"}))
    await Listing.insertMany(initdata.data);
    console.log("Done");
}
initDB();
