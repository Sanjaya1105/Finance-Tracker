const mongoose = require('mongoose');

const financialGoalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    currentAmount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('FinancialGoal', financialGoalSchema); 