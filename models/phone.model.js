const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  brand: { type: String, require: true },
  model: { type: String, require: true },
  os: { type: String, require: true },
  releaseYear: { type: String, require: true },
  price: { type: Number, require: true },
});
const Phone = mongoose.model("Phone", phoneSchema);
module.exports = { Phone };
