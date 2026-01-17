const {body,validationResult}=require("express-validator");

const BookValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required"),
        body("author")
            .trim()
            .notEmpty().withMessage("author is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("author name only can have letters and space"),
        body("rent")
            .notEmpty().withMessage("rent is required")
            .toFloat()
            .isFloat({min:0,max:1000}).withMessage("rent can be from 0 to 1000")
    ],
    errorHandler:(req,res,next)=>{  
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=BookValidation;