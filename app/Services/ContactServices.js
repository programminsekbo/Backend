import { Contact } from '../model/ContactModel.js';
import mongoose from "mongoose";
const ObjectID = mongoose.Types.ObjectId;  

// Create a new contact message
export const createContactService = async (req) => {
  try {
    let reqBody = req.body;
    await Contact.create(reqBody);
    return { status : 'success', message: "Your message has been sent successfully"}
} catch (e) {
    return {status:"fail",data:e.toString()}
}

};



// Delete a contact message by ID
export const deleteContactService = async (req) => {
  try {
    let messageID = new ObjectID(req.body.id);
    await Contact.deleteOne({_id: messageID})
    return { status : 'success', message: "Message deleted successfully"}
} catch (e) {
    return {status:"fail",data:e.toString()}
}

};


// Get all contact messages
export const getAllContactsService = async (req) => {
  try {
    let data = await Contact.find({});
    return { status : 'success', data: data}
} catch (e) {
    return {status:"fail",data:e.toString()}
}

};