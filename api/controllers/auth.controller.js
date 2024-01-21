import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { username, number, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, number, password: hashedPassword });
    try {
        await newUser.save(); //this is to insert data in db
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};