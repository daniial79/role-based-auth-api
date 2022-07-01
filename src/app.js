//third-party packages and libs 
import express from 'express';

//initiatin application
const app = express();

//applying crutial middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//exporting section
export {app};