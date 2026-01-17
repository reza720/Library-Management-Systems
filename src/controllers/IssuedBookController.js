const {IssuedBookService}=require("../services");

class IssuedBookController {
    static async createIssueBook(req,res,next) {
        try {
            const issuedBook=await IssuedBookService.createIssueBook(req.body);
            res.status(201).json({success:true, data:issuedBook});
        } catch (error) {
            next(error);
        }
    }
    static async getAllIssuedBooks(req,res,next) {
        try {
            const issuedBook= await IssuedBookService.getAllIssuedBooks();
            res.status(200).json({success:true, data:issuedBook});
        } catch (error) {
            next(error);
        }
    }
    static async getIssuedBookById(req,res,next) {
        try {
            const issuedBooks=await IssuedBookService.getIssuedBookById(req.params.id);
            res.status(200).json({success:true, data:issuedBooks});
        } catch (error) {
            next(error);
        }
    }
    static async updateIssuedBook(req,res,next) {
        try {
            const issuedBook=await IssuedBookService.updateIssuedBook(req.params.id,req.body);
            res.status(200).json({success:true, data:issuedBook});
        } catch (error) {
            next(error);
        }
    }
    static async deleteIssuedBook(req,res,next) {
        try {
            await IssuedBookService.deleteIssuedBook(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
module.exports=IssuedBookController;
