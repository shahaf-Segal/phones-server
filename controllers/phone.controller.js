const { Phone } = require("../models/phone.model");

//add filter
//add sort
const getAllPhones = async (req, res) => {
  try {
    const allPhones = await Phone.find({});
    return res.status(200).send(allPhones);
  } catch (error) {
    console.error("ERROR AT getAllPhones:", error);
    res.status(500).send("Server Error");
  }
};
/**create phone
 *
 * gets:  new Phone(body)
 *
 * returns created phone
 */
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
/**edit/update phone with the same id
 *
 * gets: id (in params) , updated phone(body)
 *
 * returns the updated phone
 */
const updatePhone = async (req, res) => {
  try {
    const newPhone = req.body;
    const { id } = req.params;
    if (!id) return res.status(400).send("Error Updating Phone");

    const updatedPhone = await Phone.findByIdAndUpdate(id, newPhone);

    if (!updatedPhone) return res.status(400).send("Error Updating Phone");
    return res.status(200).send(updatedPhone);
  } catch (error) {
    console.error("ERROR AT updatePhone:", error);
    res.status(500).send("Server Error");
  }
};
/**delete phone by its id
 *
 * gets: id
 *
 * returns id
 */
const deletePhone = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send("Error Deleting Phone");

    const updatedPhone = await Phone.findByIdAndDelete(id);

    if (!updatedPhone) return res.status(400).send("Error Deleting Phone");
    return res.status(200).send(id);
  } catch (error) {
    console.error("ERROR AT updatePhone:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { getAllPhones, createPhone, updatePhone, deletePhone };
