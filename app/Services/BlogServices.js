// Create a new blog
import mongoose from 'mongoose';
import { Blog } from './../model/BlogModel.js';
 const ObjectID = mongoose.Types.ObjectId;




// Get all blogs
export const getBlogService = async () => {
    try {
      const data = await Blog.find();
      return { status: "success", data: data };
    } catch (e) {
      return { status: "fail", data: e.message };
    }
  };




export const createBlogService = async (req) => {
  try {
    
    let user_id=req.headers.user_id;
    let reqBody=req.body;
    reqBody.userID=user_id;
    await Blog.create(reqBody);
    return {status:"success",message:"Cart List Create Success"}
}
catch (e) {
    return {status:"fail",message:"Something Went Wrong !"}
}
  };
  
  // Update a blog
  export const updateBlogService = async (req) => {
    try {
      let user_id = new ObjectID(req.headers.user_id)
      let BlogID  = new ObjectID(req.body.id);
      let reqBody = req.body;
      reqBody.userID = user_id;
      const data = await Blog.updateOne(
          { userID: user_id, _id : BlogID},
          { $set: reqBody }
      );
      return { status: "Success", data : data };
  } catch (e) {
      return { status: "Fail", message: e.toString() };
    }

  }


  
  // Delete a blog
  export const deleteBlogService = async (req) => {
    try {
      let user_id = new ObjectID(req.headers['user_id']);
      let BlogID  = new ObjectID(req.body.id);
      
      await Blog.deleteOne({_id : BlogID, userID : user_id})
      return {status:"success",message:"Remove Successfully"};
  }catch(error) {
      return {status:"fail",data:error.toString()}
    }

  };



  // Get a single blog by ID
export const getBlogByIdService = async (id) => {
  
  };