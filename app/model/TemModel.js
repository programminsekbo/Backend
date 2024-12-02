import mongoose from 'mongoose';

const  DataSchema = new mongoose.Schema({
  userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
      },
      image: {
        type: String,}
  },{timestamps: true, versionKey: false});
  
  export const Team = mongoose.model('Teams', DataSchema)
  