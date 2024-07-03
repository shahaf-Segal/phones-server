const { Router } = require("express");
const router = Router();
const {
  getAllPhones,
  createPhone,
  updatePhone,
  deletePhone,
} = require("../controllers/phone.controller");

router.get("/", getAllPhones);
router.post("/", createPhone);
router.put("/:id", updatePhone);
router.delete("/:id", deletePhone);

module.exports = router;
