
require('dotenv').config();
const mongoose = require("mongoose");

const connect = () => {
    return (mongoose.connect("mongodb+srv://manju:manju123@cluster0.n70hb.mongodb.net/?retryWrites=true&w=majority"));
}

module.exports = connect;
