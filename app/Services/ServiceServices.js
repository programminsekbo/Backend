import { ServiceModel } from "../model/ServiceModel.js";
const ObjectID = mongoose.Types.ObjectId;
 import mongoose from 'mongoose';



// Get all services
export const getAllServices = async () => {
  try {
    const services = await ServiceModel.find();
    return { status: 'success', data: services };
  } catch (error) {
    return { status: 'fail', data: error.message };
  }
};






// Create a new service
export const createService = async (req) => {
  try {
    
    let user_id=req.headers.user_id;
    let reqBody=req.body;
    reqBody.userID=user_id;
    await ServiceModel.create(reqBody);
    return {status:"success",message:"Cart List Create Success"}
}
catch (e) {
    return {status:"fail",message:"Something Went Wrong !"}
}
  };
  
  
  
  // Update a service
  export const updateService = async (req) => {
    try {
      let user_id = new ObjectID(req.headers.user_id)
      let BlogID  = new ObjectID(req.body.id);
      let reqBody = req.body;
      reqBody.userID = user_id;
      const data = await ServiceModel.updateOne(
          { userID: user_id, _id : BlogID},
          { $set: reqBody }
      );
      return { status: "Success", data : data };
  } catch (e) {
      return { status: "Fail", message: e.toString() };
    }
  };




  
  // Delete a service
  export const deleteService = async (req) => {
    try {
      let user_id = new ObjectID(req.headers['user_id']);
      let BlogID  = new ObjectID(req.body.id);
      
      await ServiceModel.deleteOne({_id : BlogID, userID : user_id})
      return {status:"success",message:"Remove Successfully"};
  }catch(error) {
      return {status:"fail",data:error.toString()}
    }
  };




  // Get a single service by ID
  export const getServiceById = async (id) => {
    try {
      const service = await ServiceModel.findById(id);
      if (!service) return { status: 'fail', data: 'Service not found' };
      return { status: 'success', data: service };
    } catch (error) {
      return { status: 'fail', data: error.message };
    }
  };
  