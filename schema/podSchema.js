const mongoose = require('mongoose');

const podSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});