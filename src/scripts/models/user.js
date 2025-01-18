import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
        },

        Password: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true,
        collection: 'Users'
    });

const Users = mongoose.model("Users", UserSchema);
export default Users;




    
