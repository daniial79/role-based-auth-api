//third-party packages and libs 
import { Router } from 'express';

//seting up the router
const router = Router();

//importing auth controllers and error handlers
import authControllers from '../controllers/auth.controller.js';
import authErrorHandlers from '../errors/auth.errorhandlers.js'; 

//routing section

//signing up new user with default role
router.post('/signup', authControllers.singUpUser, authErrorHandlers.signUpNewUserErrorHandler);

//exporting section
export { router }