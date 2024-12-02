import { Team } from "../model/TemModel.js";
const ObjectID = mongoose.Types.ObjectId;
import mongoose from 'mongoose';
// Get all team members
export const getTeamsService = async () => {
    try {
      const teams = await Team.find();
      return { status: 'success', data: teams };
    } catch (error) {
      return { status: 'fail', data: error.message };
    }
  };
  

  



  // Create a new team member
  export const createTeamService = async (req) => {
    try {
    
      let user_id=req.headers.user_id;
      let reqBody=req.body;
      reqBody.userID=user_id;
      await Team.create(reqBody);
      return {status:"success",message:"Cart List Create Success"}
  }
  catch (e) {
      return {status:"fail",message:"Something Went Wrong !"}
  }
  };
  





  // Update an existing team member
  export const updateTeamService = async (req) => {
    try {
      let user_id = new ObjectID(req.headers.user_id)
      let BlogID  = new ObjectID(req.body.id);
      let reqBody = req.body;
      reqBody.userID = user_id;
      const data = await Team.updateOne(
          { userID: user_id, _id : BlogID},
          { $set: reqBody }
      );
      return { status: "Success", data : data };
  } catch (e) {
      return { status: "Fail", message: e.toString() };
    }
  };



  
  // Delete a team member
  export const deleteTeamService = async (req) => {
    try {
      let user_id = new ObjectID(req.headers['user_id']);
      let BlogID  = new ObjectID(req.body.id);
      
      await Team.deleteOne({_id : BlogID, userID : user_id})
      return {status:"success",message:"Remove Successfully"};
  }catch(error) {
      return {status:"fail",data:error.toString()}
    }
  };



    // Get a single team member by ID
    export const getTeamByIdService = async (id) => {
      try {
        const team = await Team.findById(id);
        if (!team) return { status: 'fail', data: 'Team member not found' };
        return { status: 'success', data: team };
      } catch (error) {
        return { status: 'fail', data: error.message };
      }
    };