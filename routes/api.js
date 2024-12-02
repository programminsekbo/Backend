import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js"
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as BlogControllers from "../app/controllers/BlogControllers.js"
import * as TeamControllers from "../app/controllers/TeamControllers.js"
import * as ContactControllers from "../app/controllers/ContactControllers.js"
import * as ServiceControllers from "../app/controllers/ServiceControllers.js"


// Users
router.post("/CreateUserProfile",UsersController.CreateUserProfile);
router.post("/Login", UsersController.Login);
router.post("/VerifyLogin", UsersController.VerifyLogin);

// Blog
router.get('/getBlogs',BlogControllers.getBlogs);
// teams
router.get('/getTeams',TeamControllers.getTeams); 

//Services
router.get('/getAllServicesHandler', ServiceControllers.getAllServicesHandler);  


//router.post("/UpdateUserProfile",UsersController.UpdateUserProfile);
//router.get("/ReadUserProfile", AuthMiddleware, UsersController.ReadUserProfile);

//LOGOUT

router.get("/UserLogout", AuthMiddleware, UsersController.UserLogout);







// Blog // Get all blogs
router.get('/getBlogById/:id',AuthMiddleware,BlogControllers.getBlogById);         // Get single blog by ID
router.post('/createBlog',AuthMiddleware,BlogControllers.createBlog);            // Create a new blog
router.post('/updateBlog',AuthMiddleware,BlogControllers.updateBlog);          // Update a blog by ID
router.get('/deleteBlog',AuthMiddleware,BlogControllers.deleteBlog);       // Delete a blog by ID









 // teams  // Get all team members
router.get('/getTeamById/:id',AuthMiddleware,TeamControllers.getTeamById);         // Get a single team member by ID
router.post('/createTeam/',AuthMiddleware,TeamControllers.createTeam);            // Create a new team member
router.post('/updateTeam',AuthMiddleware,TeamControllers.updateTeam);          // Update a team member by ID
router.get('/deleteTeam',AuthMiddleware,TeamControllers.deleteTeam);       // Delete a team member by ID



//contacts

router.post('/createContact',ContactControllers.createContact); // Contact message create
router.get('/deleteContact',AuthMiddleware,ContactControllers.deleteContact); // Delete a contact message by ID
//contacts
router.get('/getAllContacts',AuthMiddleware,ContactControllers.getAllContacts);




//Services


router.post('/createServiceHandler',AuthMiddleware,ServiceControllers.createServiceHandler);        // Create a new service                                                                                   // Get all services
router.get('/getServiceByIdHandler',AuthMiddleware,ServiceControllers.getServiceByIdHandler);    // Get service by ID
router.post('/updateServiceHandler',AuthMiddleware,ServiceControllers.updateServiceHandler);     // Update a service
router.get('/deleteServiceHandler',AuthMiddleware,ServiceControllers.deleteServiceHandler);  // Delete a service






export default router;


