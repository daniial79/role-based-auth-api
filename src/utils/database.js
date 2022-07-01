//third-party packagesand libs 
import mongoose from 'mongoose';

//dbConnector function
const dbConnector = async (server) => {
    try{
        await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});
        server.listen(process.env.PORT, () => console.log('server is alive'));
    }catch(err){
        console.log(err);
    }
};

//exporting section
export { dbConnector }