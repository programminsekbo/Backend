import { createContactService, deleteContactService, getAllContactsService } from "../Services/ContactServices.js";

// Create a new contact message
export const createContact = async (req,res) => {
    const result = await createContactService(req);
    return res.status(200).json(result);
  };
  
  // Get all contact messages
  export const getAllContacts = async (req, res) => {
    const result = await getAllContactsService(req);
    return res.status(200).json(result);
  };
  
  // Delete a contact message by ID
  export const deleteContact = async (req, res) => {
    const result = await deleteContactService(req);
    return res.status(200).json(result);
  };