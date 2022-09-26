const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema({
    name: {
      type: String,
      // unique: true,
      required: true,
    },
    ctype: String,
    videos: Number,
    author: String,
    email: {
      type: String,
    },
    active: Boolean,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  //model
  //collection creation
  const Playlist = new mongoose.model("Playlist", playlistSchema);