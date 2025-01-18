import express from 'express';
const router = express.Router();
import {getUsers, getUser, postUser} from "./scripts/controllers/userController.js";

router.get("/user", getUsers);
router.get("/user/:name", getUser);
router.post("/user", postUser);

export default router;
