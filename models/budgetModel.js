const mongoose = require('mongoose');
const Category = require('./categoryModel');

const budgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: {
        type: String,
        required: true,
        validate: {
            validator: async function(value) {
                const category = await Category.findOne({ name: value });
                return !!category;
            },
            message: props => `${props.value} is not a valid category`
        }
    },
    limit: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);