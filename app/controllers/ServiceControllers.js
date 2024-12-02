

import { createService, deleteService, getAllServices, getServiceById, updateService } from "../Services/ServiceServices.js";




// Create a new service
export const createServiceHandler = async (req, res) => {
    const result = await createService(req);
    return res.status(200).json(result);
  };
  
  // Get all services
  export const getAllServicesHandler = async (req, res) => {
    const result = await getAllServices(req);
    return res.status(200).json(result);
  };
  
 
  // Update a service
  export const updateServiceHandler = async (req, res) => {
    const result = await updateService(req);
    return res.status(200).json(result);
  };
  
  // Delete a service
  export const deleteServiceHandler = async (req, res) => {
    const result = await deleteService(req);
    return res.status(200).json(result);
  };





   // Get a single service by ID
   export const getServiceByIdHandler = async (req, res) => {
    const { id } = req.params;
    const result = await getServiceById(req);
    return res.status(200).json(result);
  };
  