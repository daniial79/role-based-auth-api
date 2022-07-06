//third-party packages
import { Router } from 'express'

//importing authenticator and controllers
import { authentication } from '../middlewares/authenticate';
import userResouceController from '../controllers/userResource.controller.js';

//seting up the router
const router = Router();

//routing section
router.get('/userFirstResource', authentication, userResouceController.userFirstResource)

router.get('/userSecondResource', authentication, userResouceController.userSecondResource);

//exporting section
export {router};