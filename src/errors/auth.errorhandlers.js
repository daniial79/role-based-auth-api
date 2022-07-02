//logic section 
const signUpNewUserErrorHandler = (error, req, res, next) => {
    console.log(error);
    res.status(error.stats).json({
        message: error.message
    })
}


//exporting section 
export default {
    signUpNewUserErrorHandler
}