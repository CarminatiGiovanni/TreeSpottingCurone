const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: false
    },
    descriprion: {
        type: String,
        required: false
    },
});