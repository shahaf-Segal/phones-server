const { Phone } = require("../models/phone.model");

const getAllPhones = async (req, res) => {
  try {
    const allPhones = await Phone.find({});
    return res.status(200).send(allPhones);
  } catch (error) {
    console.error("ERROR AT getAllPhones:", error);
    res.status(500).send("Server Error");
  }
};

const createPhone = async (req, res) => {
  try {
    const newPhone = req.body;
    if (!newPhone) return res.status(400).send("No phone data sent");
    const createdPhone = await Phone.create(newPhone);
    return res.status(200).send(createdPhone);
  } catch (error) {
    console.error("ERROR AT createPhone:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { getAllPhones, createPhone };
