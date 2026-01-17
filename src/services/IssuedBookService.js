const {IssuedBook}=require("../models");

class IssuedBookService{
    async createIssueBook(data){
        return IssuedBook.create(data);
    }
    async getAllIssuedBooks() {
        return IssuedBook.findAll();
    }
    async getIssuedBookById(id) {
        const target = await IssuedBook.findByPk(id);
        if(!target){
            const err=new Error("Issued Book not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updateIssuedBook(id, data) {
        const target = await this.getIssuedBookById(id);
        await target.update(data); 
        return target;
    }
    async deleteIssuedBook(id) {
        const target = await this.getIssuedBookById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports = new IssuedBookService();
