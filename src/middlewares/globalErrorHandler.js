const globalErrorHandler = (err, req, res, next) => {
    console.error(err); 
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message,
        name: err.name || "Error",
        stack: err.stack || null,
        errors: err.errors || null, 
        original: err, 
    });
};

module.exports=globalErrorHandler;
