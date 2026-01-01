const {BookRepository}=require("../repositories");

class BookService{
    async addBook(data){
        return await BookRepository.create(data);
    }
    async findAllBooks(){
        return await BookRepository.findAll();
    }
    async findBookById(id){
        const target=await BookRepository.findById(id);
        if(!target){
            throw new Error("Book not found");
        }
        return target;
    }
    async updateBook(id,data){
        const target=await BookRepository.update(id,data);
        if(!target){
            throw new Error("Book not found");
        }
        return target;
    }
    async deleteBook(id){
        const target=await BookRepository.findById(id);
        if(!target){
            throw new Error("Book not found");
        }
        await BookRepository.delete(target);
        return true;
    }
}
module.exports=new BookService();