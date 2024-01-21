import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    number: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return v.toString().length === 10;
            },
            message: props => `${props.value} is not a 10-digit number!`
        }
    },

    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

export default User;