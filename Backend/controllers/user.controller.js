import user from "../models/user.model.js";
import bcrypt from 'bcryptjs';


export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const checkUser = await user.findOne({ email });
        if (checkUser) {
            return res.status(400).json({ message: 'User already registered', user: checkUser })
        } else {
            const hashPassword = await bcrypt.hash(password, 10)
            const userSave = await user.create({
                fullname,
                email,
                password: hashPassword
            })
            await userSave.save()
            res.status(201).json({
                message: 'User registered successfully', user: {
                    _id: userSave._id,
                    email: userSave.email,
                    fullname: userSave.fullname
                }
            })
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: error.message })
    }
    // try {
    //     const { fullname, email, password } = req.body;
    //     const users = await user.findOne({ email });
    //     if (users) {
    //         return res.status(400).json({ message: "User already exists" });
    //     }
    //     const hashPassword = await bcrypt.hash(password, 10);
    //     const createdUser = new user({
    //         fullname: fullname,
    //         email: email,
    //         password: hashPassword,
    //     });
    //     await createdUser.save();
    //     res.status(201).json({
    //         message: "User created successfully",
    //         user: {
    //             _id: createdUser._id,
    //             fullname: createdUser.fullname,
    //             email: createdUser.email,
    //         },
    //     });
    // } catch (error) {
    //     console.log("Error: " + error.message);
    //     res.status(500).json({ message: "Internal server error" });
    // }

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const checkUser = await user.findOne({ email });
    try {
        if (checkUser) {
            const loginUser = await bcrypt.compare(password, checkUser.password);
            if (!loginUser) {
                res.status(400).json({ message: "Wrong credentials" })
            } else {
                res.status(200).json({
                    message: "Login Successfully", user: {
                        id: checkUser._id,
                        email: checkUser.email,
                        fullname: checkUser.fullname
                    }
                })
            }
        } else {
            res.status(400).json({ message: "Please register First" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}