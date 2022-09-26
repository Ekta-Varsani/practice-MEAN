const express = require("express");
const bodyparser = require("body-parser");
const qr = require("qrcode");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.render("index");  // render index.ejs file
});

//post request to convert text/YRL to QR code
app.post("/scan",(req, res) => {
    const url = req.body.url;
    if(url.length === 0) res.send("Empty Data!!!");

    qr.toDataURL(url, (err, src) => {
        if(err) res.send("Error occured!!");
        res.render("scan",{src});
    })
});

app.listen(port, () => {
    console.log(`server createrd at port no: ${port}`);
})
