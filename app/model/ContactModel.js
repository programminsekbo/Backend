import mongoose from 'mongoose';

const  DataSchema = new mongoose.Schema({
 
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      sentAt: {
        type: Date,
        default: Date.now,
      },
  },{timestamps: true, versionKey: false});
  
  export const Contact  = mongoose.model('Contacts', DataSchema)
  