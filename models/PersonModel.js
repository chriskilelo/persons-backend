/**
 * TO GOD BE ALL THE GLORY
 * 01-NOV-2023
 * This will be the model for the Persons
 */

const mongoose = require('mongoose')

// Create the goal schema
const personSchema = mongoose.Schema(
    {
        gender: {
            type: String,
            required: [true, 'Please provide your gender.'],
        },
    },
    {
        name: {
            type: Object,
            required: [true, 'Please provide your name.'],
        },
    },
    {
        location: {
            type: Object,
            required: [true, 'Please provide your location details.'],
        },
    },
    {
        email: {
            type: String,
            required: [true, 'Please provide your email address.'],
        },
    },
    {
        login: {
            type: Object,
            required: [true, 'Please provide your username and password.'],
        },
    },
    {
        dob: {
            type: Object,
            required: [true, 'Please provide your date of birth.'],
        },
    },
    {
        registered: {
            type: Object,
            required: [true, 'Please provide your registration date.'],
        },
    },
    {
        phone: {
            type: String,
            required: [true, 'Please provide your office telephone number.'],
        },
    },
    {
        cell: {
            type: String,
            required: [true, 'Please provide your cell phone number.'],
        },
    },
    {
        id: {
            type: Object,
            required: [true, 'Please provide your ID details.'],
        },
    },
    {
        picture: {
            type: Object,
            required: [true, 'Please provide your picture.'],
        },
    },
    {
        nat: {
            type: String,
            required: [true, 'Please enter your nationality.'],
        },
    },
    {
        timestamps: true,
    }
)

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = mongoose.model('Person', personSchema)