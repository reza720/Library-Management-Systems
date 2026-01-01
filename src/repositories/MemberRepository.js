const {Member}=require("../models");

class MemberRepository{
    async create(data){
        return await Member.create(data);
    }
    async findAll(){
        return await Member.findAll();
    }
    async findById(id){
        return await Member.findByPk(id);
    }
    async update(id, data){
        const target= await Member.findByPk(id);
        if(!target)return null;
        return target.update(data,{returning:true});
    }
    async delete(id){
        const target= await Member.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new MemberRepository();