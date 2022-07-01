//third-party packages and libs
import { Schema, model } from 'mongoose'

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


//modelizing userSchema
const User = model('User', userSchema)

//exporting section
export { User }