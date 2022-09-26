const express = require("express");
const app = express();
var port = 4000;
const mongoose = require("mongoose");
const validator = require("validator");
const playlistRoutes = require("./Routes/playlist");
//creating new db
mongoose
  .connect("mongodb://localhost:27017/playlistt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected successfully!!!!!!!"))
  .catch((err) => console.log(err));

//insert documents
const createDocument = async () => {
  try {
    const js = new Playlist({
      name: "javascript",
      ctype: "frontend",
      videos: 50,
      author: "Thapa",
      email: "ekta.varsani@gmail.com",
      active: true,
    });

    const node = new Playlist({
      name: "node",
      ctype: "backend",
      videos: 20,
      author: "Thapa",
      email: "thapa@yahoo.com",
      active: true,
    });

    const react = new Playlist({
      name: "react",
      ctype: "frontend",
      videos: 25,
      author: "CodeOnline",
      email: "codeonline@yahoo.com",
      active: true,
    });

    const result = await Playlist.insertMany([js, node, react]);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};

app.use("/api",playlistRoutes )

createDocument();

getDocument();

//update
// const updateDocument = async (_id) => {
//   try {
//     const result = await Playlist.findOneAndUpdate(
//       { _id },
//       {
//         $set: { name: "reactjs" },
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("62384596294f55490f0f6883");

//delete
// const deleteDocument = async(_id) => {
//     try{
//         const result = await Playlist.deleteOne({_id});
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// deleteDocument("62384596294f55490f0f6883")

// app.get("/api", (req, res) => {
//   const {id} = req.body;
//   const updateDocument = (_id) => {
//     try {
//       const result = Playlist.findOneAndUpdate(
//         { _id },
//         {
//           $set: { name: "react" },
//         }
//       );
//       console.log(result);
//       res.status(200).json({result})
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   updateDocument("624d7cadc59754db974eddc7");
//   // Playlist.find({ videos: 20 }).select({ name: 1 });
// });

app.listen(port, () => {
  console.log(`server cerated at port no: ${port}`);
});
