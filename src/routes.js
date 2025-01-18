import express from 'express';
const router = express.Router();
import {getUsers, getUser, postUser} from "./scripts/controllers/userController.js";
import {getLocationsByRegion, getLocation, postLocation} from './scripts/controllers/locationController.js';

router.get("/user", getUsers);
router.get("/user/:name", getUser);
router.post("/user", postUser);

router.get("/getLocationsByRegion/:region", getLocationsByRegion);
router.get("/getLocation/:title", getLocation);
router.post("/postLocation", postLocation);

export default router;
