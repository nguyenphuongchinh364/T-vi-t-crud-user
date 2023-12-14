const User = require('../models/userSchema');


exports.create = async (data) => {
    try {
        const newUser = new User(data);
        const saveUser = await newUser.save(); // Sử dụng await để đợi kết quả
        if (!saveUser) throw new Error('User could not be saved');
        return { error: null };
    } catch (error) {
        return { error: error.message };
    }
};
exports.readOne = async (id) => {
    try {
        const user = await User.findById(id); // Sử dụng findById thay vì findByIdAndUpdate
        if (!user) throw new Error('Could not retrieve user');
        return { error: null, data: user };
    } catch (error) {
        return { error: error.message, data: null };
    }
};