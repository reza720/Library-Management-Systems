const {IssuedBook, Member, Book}=require("../models");

class IssuedBookRepository{
    async create(data){
        return await IssuedBook.create(data);
    }
    async findAll(){
        return await IssuedBook.findAll({include:[
            {model:Member, attributes:["id", "fullName", "email"]},
            {model:Book, attributes:["id", "name","author"]}
        ]});
    }
    async findById(id){
        return await IssuedBook.findByPk(id,{include:[
            {model:Member, attributes:["id", "fullName", "email"]},
            {model:Book, attributes:["id", "name","author"]}
        ]});
    }
    async update(id, data){
        const target= await IssuedBook.findByPk(id);
        if(!target)return null;
        return target.update(data,{returning:true});
    }
    async delete(id){
        const target= await IssuedBook.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new IssuedBookRepository();