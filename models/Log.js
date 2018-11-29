const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LogSchema = new Schema({
    pName: {
        type: String,
        required: true
    },
    cName: {
        type: String,
        required: true
    },
    cRace: {
        type: String,
        required: true
    },
    cClass: {
        type: String,
        required: true
    },
    cBackground: {
        type: String,
        required: true
    },
    cLevel: {
        type: Number,
        required: true
    },
    cInit: {
        type: Number,
        required: true
    },
    cPPer: {
        type: Number,
        required: true
    },
    cAC: {
        type: Number,
        required: true
    },
    cHP: {
        type: Number,
        required: true
    },
    cNotes: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Log = mongoose.model('log', LogSchema);