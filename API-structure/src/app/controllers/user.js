const mongoose = require("mongoose");
const User = require("mongoose").model("user");
const utils = require("../utils/utils");
const nodemailer = require("nodemailer")

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
  let otp_for_email = ""
  User.findOne({ email: req.body.email }).then((result) => {
    if (result.email) {
      console.log(result);
      otp_for_email = utils.generate_otp(6)

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ektavarsani13@gmail.com',
          pass: 'rapfortijgtoxwhz'
        }
      });

      var mailOptions = {
        from: 'ektavarsani13@gmail.com',
        to: result.email,
        subject: 'Sending Email using Node.js',
        text: otp_for_email
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      User.findByIdAndUpdate(req.body._id, { otp: otp_for_email }, { new: true }).then((updatedUser) => {
        res.json({ success: true })
      }).catch((error) => {
        res.json({ success: false })
      })
    }
  })
}

exports.verify_otp = (req, res) => {
  User.findById(req.body._id).then((response) => {
    if (req.body.otp == response.otp) {
      User.findByIdAndUpdate(req.body._id, { otp: '' }).then((result) => {
        res.json({ success: true })
      })
    }
    else {
      res.json({ success: false, message: "otp doesn't matched!" })
    }
  })
}

exports.registration_with_otp = (req, res) => {
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