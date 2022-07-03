//third-party packagesand libs 
import { connect } from 'mongoose';

//dbConnector function
const dbConnector = async (server) => {
    try{
        await connect(process.env.DB_URI, {useNewUrlParser: true});
        server.listen(process.env.PORT, () => console.log('server is alive'));
    }catch(err){
        console.log(err);
    }
};

//exporting section
export { dbConnector }