const {MemberService} = require("../services");

class MemberController {
    async addMember(req, res) {
        try {
            const data = req.body;
            const member = await MemberService.addMember(data);
            res.status(201).json(member);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    async getAllMembers(req, res) {
        try {
            const members = await MemberService.findAllMember();
            res.json(members);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async getMemberById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const member = await MemberService.findById(id);
            res.json(member);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    async updateMember(req, res) {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;
            const member = await MemberService.update(id, data);
            res.json(member);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    async deleteMember(req, res) {
        try {
            const id = parseInt(req.params.id);
            await MemberService.delete(id);
            res.json({ message: "Member deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
module.exports = new MemberController();
