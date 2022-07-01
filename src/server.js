//importing modules
import {app as server} from './app.js';
import { dbConnector } from './utils/database.js';

//incase of testing user colection
import {User} from './models/User.js';
User.find({})
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err);
    })

//setting the server up and connect it to database
dbConnector(server);  