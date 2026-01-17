const {Book}=require("../models");

class BookService{
    async createBook(data){
        return Book.create(data);
    }
    async getAllBooks(){
        return Book.findAll();
    }
    async getBookById(id){
        const target=await Book.findByPk(id);
        if(!target){
            const err=new Error("Book not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updateBook(id,data){
        const target=await this.getBookById(id);
        await target.update(data);
        return target;
    }
    async deleteBook(id){
        const target=await this.getBookById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new BookService();