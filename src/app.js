//third-party packages and libs 
import express from 'express';

//initiatin application
const app = express();

//applying crutial middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//importing auth routers
import {router as authRoutes} from './routes/auth.routes.js';

//applying router
app.use('/api', authRoutes);

//exporting section
export {app};