const express = require("express");
const router = express.Router();
const user = require("../controllers/user")

router.post("/register", user.registration)
router.post("/send_otp", user.send_otp)
router.post("/verify_otp", user.verify_otp)


module.exports = router