const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likeItems: { type: [String], default: [] },
    myHouse: { type: [String], default: [] },
    message: { type: [String], default: [] }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
