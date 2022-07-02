//third-party packages and libs
import { Schema, model } from 'mongoose'
import { genSalt, hash } from 'bcrypt';

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
                throw new Error('password must be longer than 7 charachters')
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

//modelizing userSchema
const User = model('User', userSchema)

//exporting section
export { User }