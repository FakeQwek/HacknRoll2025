import mongoose from "mongoose";

const LocationSchema = mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },

        Description: {
            type: String,
            required: true,
        },

        Author: {
            type: String,
            required: true,
        },

        Rating: {
            type: String,
            required: true,
        },

        Region: {
            type: String,
            required: true,
        },
        
    }, {
        timestamps: true,
        collection: 'Location'
    });

const Locations = mongoose.model("Locations", LocationSchema);

export default Locations;




    
