//importing modules
import {app as server} from './app.js';

//testing server
server.listen(process.env.PORT, process.env.HOST_NAME, () => console.log('server is alive'));