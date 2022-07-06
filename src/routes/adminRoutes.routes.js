//third-party packages
import { Router } from 'express'

//importing authenticator and controllers
import { authentication } from '../middlewares/authenticate';
import adminResouceController from '../controllers/adminResource.controller.js';

//seting up the router
const router = Router();

//routing section
router.get('/adminFirstResource', authentication, adminResouceController.adminFirstResource)

router.get('/adminSecondResource', authentication, adminResouceController.adminSecondResource);

//exporting section
export { router };