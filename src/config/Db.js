const mongoose = require("mongoose");

const mondbUrl =
  "mongodb+srv://khanmofique:bcjFFhwiLzzVTR65@cluster0.dazp710.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(mondbUrl);
};

module.exports = { connectDb };
