const {MemberRepository}=require("../repositories");

class MemberService{
    async addMember(data){
        return await MemberRepository.create(data);
    }
    async findAllMembers(){
        return await MemberRepository.findAll();
    }
    async findMemberById(id){
        const target=await MemberRepository.findById(id);
        if(!target){
            throw new Error("Member not found");
        }
        return target;
    }
    async updateMember(id,data){
        const target=await MemberRepository.update(id,data);
        if(!target){
            throw new Error("Member not found");
        }
        return target;
    }
    async deleteMember(id){
        const target=await MemberRepository.delete(id);
        if(!target){
            throw new Error("Member not found");
        }
        await MemberRepository.delete(target);
        return true;
    }
}
module.exports=new MemberService();