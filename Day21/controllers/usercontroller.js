/*
    this file contains the controller for user
    this file contains the logic for creating a user
    this file contains the logic for getting all users


*/

const User = require("../models/users");
exports.createUser = async (req, res) => {
    try {
        const user = new User ({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
        await user.save();
        res.status(201).json({ message: "User created successfully",
            data : {
                id: savedUser._id,
            }
        });
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user", error });
    }
}
exports.getUser = async (req, res) => {
    try{
        const users = await User.findByID(req.params.id);
        if (!users) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Users retrieved successfully", data: users });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: updateUser });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
}