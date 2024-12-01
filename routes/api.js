import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js"
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";



// Users
router.post("/CreateUserProfile",UsersController.CreateUserProfile);
router.post("/Login", UsersController.Login);
router.post("/VerifyLogin", UsersController.VerifyLogin);

router.post("/UpdateUserProfile",UsersController.UpdateUserProfile);
router.get("/ReadUserProfile", AuthMiddleware, UsersController.ReadUserProfile);

//LOGOUT

router.get("/UserLogout", AuthMiddleware, UsersController.UserLogout);




export default router;


