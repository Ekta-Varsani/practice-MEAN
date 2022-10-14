// const mongoose = require("mongoose")
const User = require("mongoose").model("user")

exports.check_request_params = function (request_data_body, params_array, response) {
    var missing_param = '';
    var is_missing = false;
    var invalid_param = '';
    var is_invalid_param = false;

    params_array.forEach(function (param) {
        if (request_data_body[param.name] == undefined) {
            missing_param = param.name;
            is_missing = true;
        } else {
            if (param.type && typeof request_data_body[param.name] !== param.type) {
                is_invalid_param = true;
                invalid_param = param.name;
            }
        }
    });

    if (is_missing) {
        console.log("missing_param: " + missing_param)
        response({ success: false, error_description: missing_param + ' parameter missing' });
    } else if (is_invalid_param) {
        console.log("invalid_param: " + invalid_param)
        response({ success: false, error_description: invalid_param + ' parameter invalid' });
    }
    else {
        response({ success: true });
    }
}