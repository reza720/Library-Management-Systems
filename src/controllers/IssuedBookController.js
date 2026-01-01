const { IssuedBookService } = require("../services");

class IssuedBookController {
    async issueBook(req, res) {
        try {
            const { memberId, bookId } = req.body;
            const record = await IssuedBookService.issueBook(memberId, bookId);
            res.status(201).json(record);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async getAllIssuedBooks(req, res) {
        try {
            const records = await IssuedBookService.getAllIssuedBooks();
            res.json(records);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getIssuedBookById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const record = await IssuedBookService.getIssuedBookById(id);
            res.json(record);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async returnBook(req, res) {
        try {
            const id = parseInt(req.params.id);
            const record = await IssuedBookService.returnBook(id);
            res.json(record);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteIssuedBook(req, res) {
        try {
            const id = parseInt(req.params.id);
            await IssuedBookService.deleteIssuedBook(id);
            res.json({ message: "Issued book record deleted" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new IssuedBookController();
