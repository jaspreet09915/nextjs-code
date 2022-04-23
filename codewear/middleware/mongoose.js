import mongoose from "mongoose";
// env is a environment file where env var is stored
const connectDb = handler => async(req , res)=>{
  if(mongoose.connections[0].readyState){
   return handler(req,res)
  }
  await mongoose.connect(process.env.MONGO_URI)
  return handler(req, res)
}

export default connectDb;