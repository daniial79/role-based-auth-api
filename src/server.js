//importing modules
import {app as server} from './app.js';
import { dbConnector } from './utils/database.js';

//setting the server up and connect it to database
dbConnector(server);  