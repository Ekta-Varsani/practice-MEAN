const express = require("express");
const { addMusic } = require("../Controllers/playlist");
const playlist = require("../Services/playlist");
const router = express.Router();


router.get("/create", playlist.addmusic)


module.exports = router;