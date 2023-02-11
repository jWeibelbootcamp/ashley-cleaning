const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },    
    name: {
        type: String,
        required: [true, 'Please add a service'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    }
});

module.exports = mongoose.model('Service', serviceSchema);