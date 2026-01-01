const { IssuedBookRepository, MemberRepository, BookRepository } = require("../repositories");

class IssuedBookService {
    async issueBook(memberId, bookId) {
        const member = await MemberRepository.findById(memberId);
        if (!member) throw new Error("Member not found");

        const book = await BookRepository.findById(bookId);
        if (!book) throw new Error("Book not found");

        const issued = await IssuedBookRepository.findByBookId(bookId);
        if (issued && !issued.isReturned) {
            throw new Error("Book is already issued");
        }

        const memberIssuedCount = await IssuedBookRepository.countActiveByMember(memberId);
        if (memberIssuedCount >= 3) {
            throw new Error("Member has reached borrow limit");
        }

        const today = new Date().toISOString().split("T")[0]; 
        return await IssuedBookRepository.create({
            memberId,
            bookId,
            issuedDate: today,
            isReturned: false
        });
    }

    async getAllIssuedBooks() {
        return await IssuedBookRepository.findAll();
    }

    async getIssuedBookById(id) {
        const record = await IssuedBookRepository.findById(id);
        if (!record) throw new Error("Issued book record not found");
        return record;
    }

    async updateIssuedBook(id, data) {
        const record = await IssuedBookRepository.update(id, data);
        if (!record) throw new Error("Issued book record not found");
        return record;
    }

    async returnBook(id) {
        const record = await IssuedBookRepository.findById(id);
        if (!record) throw new Error("Issued book record not found");
        if (record.isReturned) throw new Error("Book already returned");

        const today = new Date().toISOString().split("T")[0]; 
        return await IssuedBookRepository.update(id, {
            returnDate: today,
            isReturned: true
        });
    }

    async deleteIssuedBook(id) {
        const record = await IssuedBookRepository.findById(id);
        if (!record) throw new Error("Issued book record not found");

        await IssuedBookRepository.delete(id);
        return true;
    }
}
module.exports = new IssuedBookService();
