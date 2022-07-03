//third-party packages and libs
import { Schema, model } from 'mongoose';
import { genSalt, hash , compare} from 'bcrypt';
import { sign } from 'jsonwebtoken';

//setting up the user schema
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        validate: function(value){
            if(value.length < 7){
                throw new Error('password must be longer than 7 charachters');
            }
        }
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})
//mongoose hooks

//hashing password 
userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        const salts = await genSalt(10);
        user.password = await hash(user.password, salts);
    }
    next();
});

//custome static methods in User model
userSchema.statics.checkCredentials = async (email, password) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error('email not found');
        }
        const passwordIsMatch = await compare(password, user.password);
        if(!passwordIsMatch){
            throw new Error('wrong password');
        }
        return user;
    }catch(err){
        return err
    };
}

//custome methods in User instance
userSchema.methods.genAuthToken = async function(){
    const user = this;
    try{
        const payload = {
            _id: user._id,
            role: user.role
        }
        const token = await sign(payload, "rolebasedauthprac");
        return token;
    }catch(err){
        console.log(err);
    }
}

//modelizing userSchema
const User = model('User', userSchema);

//exporting section
export { User };