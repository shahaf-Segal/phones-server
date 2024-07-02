const { Router } = require("express");
const router = Router();
const {
  getAllPhones,
  createPhone,
  updatePhone,
} = require("../controllers/phone.controller");

router.get("/", getAllPhones);
router.post("/", createPhone);
router.patch("/:id", updatePhone);

module.exports = router;
