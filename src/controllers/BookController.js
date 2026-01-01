const {BookService}=require("../services")

class BookController {
    async addBook(req, res) {
        try {
            const book = await BookService.addBook(req.body);
            res.status(201).json(book);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    async getAllBooks(req, res) {
        try {
            const books = await BookService.findAllBooks();
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async getBookById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const book = await BookService.findBookById(id);
            res.json(book);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    async updateBook(req, res) {
        try {
            const id = parseInt(req.params.id);
            const book = await BookService.updateBook(id, req.body);
            res.json(book);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    async deleteBook(req, res) {
        try {
            const id = parseInt(req.params.id);
            await BookService.deleteBook(id);
            res.json({ message: "Book deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
module.exports = new BookController();
