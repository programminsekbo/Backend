import { createBlogService, deleteBlogService, getBlogByIdService, getBlogService, updateBlogService } from "../Services/BlogServices.js";





// Get all blogs
export const getBlogs = async (req, res) => {
    const result = await getBlogService();
    return res.json(result);
  };
  
  // Create a new blog
  export const createBlog = async (req, res) => {
   // const blogData = req.body;
    const result = await createBlogService(req);
    return res.status(200).json(result)
  };
  
  // Update an existing blog
  export const updateBlog = async (req, res) => {
    const result = await updateBlogService(req);
    return res.status(200).json(result);
  };
  
  // Delete a blog
  export const deleteBlog = async (req, res) => {
    const result = await deleteBlogService(req);
    return res.status(200).json(result);
  };



  // Get a single blog by ID
export const getBlogById = async (req, res) => {
    const { id } = req.params;
    const result = await getBlogByIdService(id);
    return res.status(result.status === "success" ? 200 : 404).json(result);
  };