const mongoose = require("mongoose");
const User = require("mongoose").model("user");
const utils = require("../utils/utils")

exports.registration = (req, res) => {
    utils.check_request_params(req.body, [{ name: "first_name", type: "string" }, { name: "last_name", type: "string" }, { name: "email", type: "string" }, { name: "password", type: "string" }, { name: "phone_number", type: "string" }], (response) => {
        if (response.success == true) {
            if (req.body) {
                console.log(req.body);
                let new_user = new User({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone_number: req.body.phone_number,
                    password: req.body.password,
                    otp: req.body.otp
                })

                new_user.save().then((result) => {
                    res.json(result)
                }).catch((error) => {
                    res.json(error)
                })
            }
            else {
                res.json({ "err": "err" })
            }
        }
        else {
            res.json(response)
        }
    })
}

exports.send_otp = (req, res) => {
    
}