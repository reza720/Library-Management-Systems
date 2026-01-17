const {Member}=require("../models");

class MemberService{
    async createMember(data){
        return Member.create(data);
    }
    async getAllMembers(){
        return Member.findAll();
    }
    async getMemberById(id){
        const target=await Member.findByPk(id);
        if(!target){
            const err=new Error("Member not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updateMember(id,data){
        const target=await this.getMemberById(id);
        await target.update(data);
        return target;
    }
    async deleteMember(id){
        const target=await this.getMemberById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new MemberService();