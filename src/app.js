//third-party packages and libs 
import express from 'express';
import cookieParser from 'cookie-parser';

//initiatin application
const app = express();

//applying crutial middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//importing auth routers
import {router as authRoutes} from './routes/auth.routes.js';
import {router as userRoutes} from './routes/userRoutes.routes.js';
import {router as adminRoutes} from './routes/adminRoutes.routes.js';

//applying router 
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', adminRoutes);

//exporting section
export {app};