import { emitWarning } from "process";
import Users from "./models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        console.log(users);
        res.status(200).json({success: true, data: users});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const getUser = async (req,res) => {
    const username = req.params["name"];
    try {
        const user = await Users.findOne({"username" : username});
        console.log(user);
        res.status(200).json({success: true, data: user});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const postUser = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await Users.insertOne({
            Username: username,
            Password: password
        });
        console.log(user);
        res.status(200).json({success: true, data: user});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}