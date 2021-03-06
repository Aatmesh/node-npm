let response = {
    "EN": {
        "form_field_required": {
            "status": false,
            "message": "Please do fill the required fields",
            "code": "CUS_0001"
        },
        "customer_not_found": {
            "status": false,
            "message": "We are sorry. We could not find your account.",
            "code": "CUS_0002"
        },
        "customer_found": {
            "status": true,
            "message": "Customer Found",
            "code": "CUS_0003"
        },
        "invalid_credential": {
            "status": false,
            "message": "Your username and/or password do not match",
            "code": "CUS_0004"
        },
        "invalid_user": {
            "status": false,
            "message": "Your username do not match",
            "code": "CUS_0004"
        },
        "customer_inactive": {
            "status": false,
            "message": "This account is inactive",
            "code": "CUSINVALID_0004"
        },
        "otp_sent": {
            "status": true,
            "message": "OTP has been sent to your registered mobile number",
            "code": "CUS_0005",
            "values": {}
        },
        "otp_failed": {
            "status": false,
            "message": "OTP not sent",
            "code": "CUS_0006"
        },
        "otp_verified": {
            "status": true,
            "message": "OTP verified",
            "code": "CUS_0007"
        },
        "invalid_otp": {
            "status": false,
            "message": "The OTP you entered is Invalid. Please enter the correct OTP",
            "code": "CUS_0008"
        },
        "otp_expired": {
            "status": false,
            "message": "OTP entered is expired. Please generate a new OTP and try again",
            "code": "CUS_0009"
        },
        "otp_verified_success": {
            "status": false,
            "message": "OTP verified successfully",
            "code": "CUS_0019"
        },
        "otp_resend": {
            "status": true,
            "message": "OTP resent successfully",
            "code": "CUS_0010",
            "values": {}
        },
        "max_attempt_over": {
            "status": false,
            "message": "You have reached your max attempt",
            "code": "CUS_0011"
        },
        "user_does_not_exist": {
            "status": false,
            "message": "This account doesn???t not exist. Please try again with valid credentials",
            "code": "CUS_0011"
        },
        "password_saved": {
            "status": true,
            "message": "Password saved successfully!",
            "code": "PAS_0003"
        },
        "password_reset": {
            "status": true,
            "message": "Password reset successfully!",
            "code": "PAS_0004"
        },
    },
    "VI": {
        "form_field_required": {
            "status": false,
            "message": "Y??u c???u m???u",
            "code": "CUS_0001"
        },
        "customer_not_found": {
            "status": false,
            "message": "Kh??ng t??m th???y kh??ch h??ng",
            "code": "CUS_0002"
        },
        "customer_found": {
            "status": true,
            "message": "T??m th???y kh??ch h??ng",
            "code": "CUS_0003"
        },
        "invalid_credential": {
            "status": false,
            "message": "Ch???ng ch??? kh??ng h???p l???",
            "code": "CUS_0004"
        },
        "customer_inactive": {
            "status": false,
            "message": "Kh??ch h??ng kh??ng ho???t ?????ng",
            "code": "CUSINVALID_0004"
        },
        "otp_sent": {
            "status": true,
            "message": "???? g???i OTP",
            "code": "CUS_0005",
            "values": {}
        },
        "otp_failed": {
            "status": false,
            "message": "OTP kh??ng ???????c g???i",
            "code": "CUS_0006"
        },
        "otp_verified": {
            "status": true,
            "message": "???? x??c minh OTP",
            "code": "CUS_0007"
        },
        "invalid_otp": {
            "status": false,
            "message": "OTP kh??ng h???p l???",
            "code": "CUS_0008"
        },
        "otp_expired": {
            "status": false,
            "message": "OTP h???t h???n",
            "code": "CUS_0009"
        },
        "otp_resend": {
            "status": true,
            "message": "OTP ???????c g???i l???i",
            "code": "CUS_0010",
            "values": {}
        },
        "max_attempt_over": {
            "status": false,
            "message": "B???n ???? ?????t ???????c n??? l???c t???i ??a c???a b???n",
            "code": "CUS_0011"
        },
        "user_does_not_exist": {
            "status": false,
            "message": "ng?????i d??ng kh??ng t???n t???i",
            "code": "CUS_0011"
        }
    },
    "HIN": {
        "form_field_required": {
            "status": false,
            "message": "Form fields required",
            "code": "CUS_0001"
        },
        "customer_not_found": {
            "status": false,
            "message": "No Customer Found",
            "code": "CUS_0002"
        },
        "customer_found": {
            "status": true,
            "message": "Customer Found",
            "code": "CUS_0003"
        },
        "invalid_credential": {
            "status": false,
            "message": "Invalid Credential",
            "code": "CUS_0004"
        },
        "customer_inactive": {
            "status": false,
            "message": "Customer is inactive HIN",
            "code": "CUSINVALID_0004"
        },
        "otp_sent": {
            "status": true,
            "message": "OTP Sent HIN",
            "code": "CUS_0005",
            "values": {}
        },
        "otp_failed": {
            "status": false,
            "message": "OTP not sent",
            "code": "CUS_0006"
        },
        "otp_verified": {
            "status": true,
            "message": "OTP verified HIN",
            "code": "CUS_0007"
        },
        "invalid_otp": {
            "status": false,
            "message": "Invalid OTP",
            "code": "CUS_0008"
        },
        "otp_expired": {
            "status": false,
            "message": "OTP Expired",
            "code": "CUS_0009"
        },
        "otp_resend": {
            "status": true,
            "message": "OTP sent again HIN",
            "code": "CUS_0010",
            "values": {}
        },
        "max_attempt_over": {
            "status": false,
            "message": "You have reached your max attempt",
            "code": "CUS_0011"
        }
    }
};
module.exports = response;
module.exports.success = function (key, values, language_code = 'EN') {
    let returnResponse = response[language_code][key] == undefined ? {} : response[language_code][key];
    returnResponse.status = true;
    values ? returnResponse.values = values : "";
    return returnResponse;
}
module.exports.failed = function (key, errors, language_code = 'EN') {
    let returnResponse = response[language_code][key] == undefined ? {} : response[language_code][key];
    returnResponse.status = false;
    errors && errors != key ? returnResponse.error = errors : "";
    return returnResponse;
}