const mongoose = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validateCity = function (city) {
    return /^[a-zA-Z\s]*$/.test(city)
}

var validateZipCode = function (zipcode) {
    return /^\d{5}(-\d{4})?$/.test(zipcode)
}

var validatePhone = function (phone) {
    return /^\d{1}-\d{3}-\d{3}-\d{4}$/.test(phone)
}

var validateURL = function (website) {
    return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(website)
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: [4, "Must be at least 4 characters"]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [validateEmail, "Not a valid email"]
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        suite: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
            validate: [validateCity, "Not a valid city"]
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
            validate: [validateZipCode, "Not a valid zipcode"]
        },
        geo: {
            lat: {
                type: String,
                required: true,
                trim: true
            },
            lng: {
                type: String,
                required: true,
                trim: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: [validatePhone, "Not a valid phone number"]
    },
    website: {
        type: String,
        required: true,
        trim: true,
        validate: [validateURL, "Not a valid URL"]
    },
    company: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        catchPhrase: {
            type: String,
            required: true,
        },
        bs: {
            type: String,
            required: true,
        }
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;