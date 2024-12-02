import mongoose from 'mongoose';


const  DataSchema = new mongoose.Schema({
  userID:{type:mongoose.Schema.Types.ObjectId,required:true},
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
 
  image: {
    type: String,
  },
},{timestamps: true, versionKey: false});

export const Blog = mongoose.model('Blogs', DataSchema)
