import express from "express";
const router = express.Router();
import * as UsersController from "../app/controllers/UsersController.js";



// Users

router.post("/Login", UsersController.Login)






export default router;


