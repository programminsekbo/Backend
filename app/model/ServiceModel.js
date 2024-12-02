import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
     
    },
    image: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

export const ServiceModel = mongoose.model("Service", DataSchema);
