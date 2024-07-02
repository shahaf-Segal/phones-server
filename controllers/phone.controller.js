const { Phone } = require("../models/phone.model");

const getAllPhones = async (req, res) => {
  try {
    const allPhones = await Phone.find({});
    return res.status(200).send(allPhones);
  } catch (error) {
    console.error("ERROR AT getAllPhones:", error);
    res.status(500).send("ERROR");
  }
};

module.exports = { getAllPhones };
