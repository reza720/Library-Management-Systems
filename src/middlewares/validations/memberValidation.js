const {body, validationResult}=require("express-validator");

const MemberValidation={
    rules:[
        body("fullName")
            .trim()
            .notEmpty().withMessage("full name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("Name only can have letters and space"),
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("valid email is required"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone number is required")
            .isNumeric().withMessage("phone number must be numbers")
            .isLength({min:10,max:10}).withMessage("phone number must be 10 digits")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation Failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=MemberValidation;