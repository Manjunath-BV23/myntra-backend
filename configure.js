
require('dotenv').config();
const mongoose = require("mongoose");

const connect = () => {
    return (mongoose.connect("mongodb+srv://manjunath:manju123@cluster0.7z4tl.mongodb.net/?retryWrites=true&w=majority"));
}

module.exports = connect;
