const {MemberService}=require("../services");

class MemberController {
    static async createMember(req,res,next) {
        try {
            const member=await MemberService.createMember(req.body);
            res.status(201).json({success:true, data:member});
        } catch (error) {
            next(error);
        }
    }
    static async getAllMembers(req,res,next) {
        try {
            const members = await MemberService.getAllMembers();
            res.status(200).json({success:true, data:members});
        } catch (error) {
            next(error);
        }
    }
    static async getMemberById(req,res,next) {
        try {
            const member=await MemberService.getMemberById(req.params.id);
            res.status(200).json({success:true, data:member});
        } catch (error) {
            next(error);
        }
    }
    static async updateMember(req,res,next) {
        try {
            const member=await MemberService.updateMember(req.params.id,req.body);
            res.status(200).json({success:true, data:member});
        } catch (error) {
            next(error);
        }
    }
    static async deleteMember(req,res,next) {
        try {
            await MemberService.deleteMember(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
module.exports = MemberController;
