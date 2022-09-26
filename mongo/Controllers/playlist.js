// import { addmusic } from "../Services/playlist";
const addmusic = require("../Services/playlist");
const addMusic = async (req, res) => {
  const data = await addmusic();

  res.status(200).json({ data });
};

module.exports = "addMusic"
// export { addMusic };
