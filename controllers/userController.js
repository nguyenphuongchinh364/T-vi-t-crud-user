const {
    create,
    getOneUser } = require('../helpres/userdbHelpers');
async function createUser(req, res) {
    if (!Object.keys(req.body).length) {
        return res.status(400).json({
            message: 'Yêu cầu không được để trống'
        });
    }

    const { username, password } = req.body;

    try {
        Book = await create({ username, password });

        res.status(201).json({
            message: 'Bản ghi sách mới đã được tạo'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Đã xảy ra lỗi khi tạo bản ghi sách mới'
        });
    }
}

async function getOneUser(req, res) {
    const user = await readOne(req.params.userID)
    if (user.error) {
        res.status(500).json({
            message: user.error,
            users: user.data
        })
    }
    res.status(200).json({
        message: 'success',
        user: user.data
    })
}

module.exports = {
    createUser
    getOneUser

};