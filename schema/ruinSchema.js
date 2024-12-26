const mongoose = require('mongoose');

const ruinSchema = new mongoose.Schema({
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
    },
    discoveredBy: {
        type: String,
        required: false,
        default: 'Anonymous'
    }
}, { timestamps: true });


const Ruin = mongoose.model('Ruin', ruinSchema);

module.exports = Ruin;