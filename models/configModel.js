const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    dailyExpenseLimit: { type: Number, default: 100000 }
});

module.exports = mongoose.model('Config', configSchema); 