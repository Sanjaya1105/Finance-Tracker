const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    month: { type: Number, required: true }, // 0-11 for Jan-Dec
    year: { type: Number, required: true },
    totalIncome: { type: Number, default: 0 },
    totalExpense: { type: Number, default: 0 },
    remainingBalance: { type: Number, default: 0 },
    exceededCategories: [{
        category: String,
        limit: Number,
        exceededDate: Date
    }],
    completedGoals: [{
        name: String,
        completedDate: Date
    }]
});

module.exports = mongoose.model('Report', reportSchema); 