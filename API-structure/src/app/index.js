const express = require("express");
const router = express.Router();
require("./models/user")
router.use("/user_api", require('./routes/user'))

module.exports = router;