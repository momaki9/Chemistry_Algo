const { Schema, model } = require('mongoose');

const algoSchema = new Schema({
    compound: {
        type: String
    },
    concentration: {
        type: Number
    },
    volume: {
        type: Number
    }
});

const Algo = model('Algo', algoSchema);
module.exports = Algo;