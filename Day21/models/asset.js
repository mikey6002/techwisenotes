const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    shares : { type: Number, required: true, min: 1 },
    type: { type: String, enum: ['stock', 'bond', 'crypto'], required: true },
});
const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset;
