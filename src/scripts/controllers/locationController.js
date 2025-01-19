
import Locations from "../models/location.js";

export const getLocationsByRegion = async (req, res) => {
    try {
        const region = req.params["region"];
        console.log(region);
        const locations = await Locations.find({Region : region});
        console.log(locations);
        res.status(200).json({success: true, data: locations});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const getLocation = async (req,res) => {
    const title = req.params["title"];
    try {
        const location = await Locations.findOne({"Title" : title});
        console.log(location);
        res.status(200).json({success: true, data: location});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const postLocation = async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const author = req.body.author;
    const rating = req.body.rating;
    const region = req.body.region;
    const image = req.body.region;
    console.log(title + " " + description + " " + author + " " + rating + " " + region);

    try {
        const location = await Locations.create({
            Title: title,
            Description: description,
            Author: author,
            Rating: rating,
            Region: region
        });
        console.log(location);
        res.status(200).json({success: true, data: location});
    }
    catch(error) {
        console.log(title + " " + description + " " + author + " " + rating + " " + region);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

