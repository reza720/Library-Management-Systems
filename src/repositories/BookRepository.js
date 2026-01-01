const {Book}=require("../models");

class BookRepository{
    async create(data){
        return await Book.create(data);
    }
    async findAll(){
        return await Book.findAll();
    }
    async findById(id){
        return await Book.findByPk(id);
    }
    async update(id, data){
        const target= await Book.findByPk(id);
        if(!target)return null;
        return target.update(data,{returning:true});
    }
    async delete(id){
        const target= await Book.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new BookRepository();