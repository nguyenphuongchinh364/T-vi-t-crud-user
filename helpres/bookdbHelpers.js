// dbhelpers.js

const Book = require('../models/bookSchema');

exports.create = async (data) => {
    try {
        const newBook = new Book(data);
        const savedBook = await newBook.save(); // Sử dụng await để đợi kết quả
        if (!savedBook) throw new Error('Book could not be saved');
        return { error: null };
    } catch (error) {
        return { error: error.message };
    }
};

exports.readAll = async () => {
    try {
        const books = await Book.find({});
        if (books.length === 0) throw new Error('No books found'); // Kiểm tra chiều dài mảng
        return { error: null, data: books };
    } catch (error) {
        return { error: error.message, data: null };
    }
};

exports.readOne = async (id) => {
    try {
        const book = await Book.findById(id); // Sử dụng findById thay vì findByIdAndUpdate
        if (!book) throw new Error('Could not retrieve book');
        return { error: null, data: book };
    } catch (error) {
        return { error: error.message, data: null };
    }
};

exports.update = async (id, data) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
        if (!updatedBook) throw new Error('Failed to update book');
        return { error: null, data: updatedBook };
    } catch (error) {
        return { error: error.message, data: null };
    }
};

exports.deleteOne = async (id) => {
    try {
        const isDeleted = await Book.findByIdAndDelete(id);
        if (!isDeleted) throw new Error('Failed to delete book');
        return { error: null };
    } catch (error) {
        return { error: error.message };
    }
};

exports.deleteAll = async () => {
    try {
        const isDeleted = await Book.deleteMany({});
        if (!isDeleted) throw new Error('Failed to delete books');
        return { error: null };
    } catch (error) {
        return { error: error.message };
    }
};
