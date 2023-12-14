
const {
    create,
    readAll,
    readOne,
    update,
    deleteOne,
    deleteAll
} = require('../helpres/bookdbHelpers');
async function createBook(req, res) {
    if (!Object.keys(req.body).length) {
        return res.status(400).json({
            message: 'Yêu cầu không được để trống'
        });
    }

    const { title, author, publisher, read } = req.body;

    try {
        Book = await create({ title, author, publisher, read });

        res.status(201).json({
            message: 'Bản ghi sách mới đã được tạo'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Đã xảy ra lỗi khi tạo bản ghi sách mới'
        });
    }
}

async function getAllBooks(req, res) {
    const books = await readAll()
    if (books.error) {
        res.status(500).json({
            message: error.message,
            books: books.data
        })
    }
    res.status(200).json({
        message: 'success',
        books: books.data
    })
}

async function getOneBook(req, res) {
    const book = await readOne(req.params.bookID)
    if (book.error) {
        res.status(500).json({
            message: book.error,
            books: book.data
        })
    }
    res.status(200).json({
        message: 'success',
        book: book.data
    })
}

async function updateBook(req, res) {
    if (!Object.keys(req.body).length) {
        res.status(400).json({
            message: 'Request body cannot be empty',
            book: null
        })
    }

    const book = await update(req.params.bookID, req.body)
    if (book.error) {
        res.status(500).json({
            message: book.error,
            book: book.data
        })
    }
    res.status(200).json({
        message: 'success',
        book: book.data
    })
}

async function deleteOneBook(req, res) {
    const isDeleted = await deleteAll(req)
    if (isDeleted.error) {
        res.status(500).json({
            message: isDeleted.error,
        })
    }
    res.status(200).json({
        message: 'Deleted Successfully'
    })
}

async function deleteAllBooks(req, res) {

    const isDeleted = await deleteOne(req.params.bookID)
    if (isDeleted.error) {
        res.status(500).json({
            message: isDeleted.error,
        })
    }
    res.status(200).json({
        message: 'Deleted Successfully'
    })
}

module.exports = {
    createBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteOneBook,
    deleteAllBooks
};
