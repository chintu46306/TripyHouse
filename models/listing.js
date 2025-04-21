// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     image: {
//         type: String,
//         filename: String,
//         url: String
//     //     default: "https://unsplash.com/photos/person-lying-inside-tent-and-overlooking-mountain-re2LZOB2XvY",
//     //     set: (v)=> v ==="" ? "https://unsplash.com/photos/person-lying-inside-tent-and-overlooking-mountain-re2LZOB2XvY" : v,
//      },
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: {
            filename: String,
            url: String
        },
        required: true,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;