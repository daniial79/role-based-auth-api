//importing user model
import { User } from '../models/User.js';

//logic section

//signing up new user with default role
const singUpUser = async (req, res, next) => {
    try{
        const newUserCredentials = {
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        };
        const existingUser = await User.findOne({email:newUserCredentials.email});
        if(existingUser){
            const error = {
                message: 'this user is already in use by another user',
                status: 400
            }
            return next(error);
        }
        const user = new User(newUserCredentials);
        const savedUser = await user.save();
        res.status(201).json({
            message:'user has been saved to database, please login with your credentials.',
            savedUser
        });
        //password hashing will be handled before saving the user to db by mongoose hook
    }catch(err){
        next(err);
    }
}

//logging in with user credentials
const logInUser = async (req, res, next) => {
    const {email, password} = req.body;
    try{
        const user = await User.checkCredentials(email, password);
        const token = await user.genAuthToken();
        res.cookie('token', token, {
            expires: new Date(Date.now() + 8 * 3600000),
            httpOnly: true
        });
        res.status(200).json({
            message: 'you have logged in successfuly',
            token: token,
            user
        });
    }catch(err){
        const error = {
            message: err.message,
            status: 500
        }
        next(error)
    }
}

//exporting section
export default {
    singUpUser,
    logInUser
};