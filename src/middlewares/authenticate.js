//third-party packages and libs
import { verify } from 'jsonwebtoken';

//importing User model 
import { User } from '../models/User.js';

//authentication logic for restricted routes
const authentication = async (req, res, next) => {
    try{
        const authToken = req.cookies.token;
        if(!authToken){
            return res.status(401).json({
                message: 'please login first.'
            })
        }
        //put user id and user role in req object for better access
        const payload = await verify(authToken, process.env.JWT_SECRET);
        req.userPayload = payload;
        next();
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

//exporting section
export { authentication }