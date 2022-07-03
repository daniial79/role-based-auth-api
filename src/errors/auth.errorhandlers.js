//logic section 
const signUpNewUserErrorHandler = (error, req, res, next) => {
    res.status(error.stats).json({
        message: error.message
    });
};

const logInUserErrorHandler = (error, req, res, next) => {
    res.status(error.status).json({
        messasge: error.message
    });
};


//exporting section 
export default {
    signUpNewUserErrorHandler,
    logInUserErrorHandler
};