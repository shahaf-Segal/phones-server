const { Router } = require("express");
const router = Router();
const { getAllPhones } = require("../controllers/phone.controller");
router.get("/", getAllPhones);

module.exports = router;
