const errorHandlerMiddleware = (req,res,next) => {
    return res.status(500).json({message: 'Error found'});
}

module.exports = errorHandlerMiddleware;