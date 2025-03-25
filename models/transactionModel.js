const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    tag: { type: String },
    recurring: { type: Boolean, default: false },
    recurringDate: { type: Number, min: 1, max: 31 },
    category: { type: String },
    recurringPattern: { type: String, enum: ['weekly', 'monthly', 'yearly', 'biweekly'] },
    terminateDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema); 