const {BookService}=require("../services")

class BookController{
    static async createBook(req,res,next) {
        try {
            const book = await BookService.createBook(req.body);
            res.status(201).json({success:true, data:book});
        } catch (error) {
            next(error);
        }
    }
    static async getAllBooks(req,res,next) {
        try {
            const books = await BookService.getAllBooks();
            res.status(200).json({success:true, data:books});
        } catch (error) {
            next(error);
        }
    }
    static async getBookById(req,res,next) {
        try {
            const book = await BookService.getBookById(req.params.id);
            res.status(200).json({success:true, data:book});
        } catch (error) {
            next(error);
        }
    }
    static async updateBook(req,res,next) {
        try {
            const book=await BookService.updateBook(req.params.id,req.body);
            res.status(200).json({success:true, data:book});
        } catch (error) {
            next(error);
        }
    }
    static async deleteBook(req,res,next) {
        try {
            await BookService.deleteBook(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
module.exports=BookController;
