const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: [true, "Username is already in use"]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
        unique: [true, "Email is already in use"]
    },
    password: { type: String, required: true, minlength: 8 },
}, { timestamps: true })

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model('User', UserSchema)
module.exports = User