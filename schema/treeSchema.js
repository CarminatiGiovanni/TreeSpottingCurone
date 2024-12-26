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

const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;