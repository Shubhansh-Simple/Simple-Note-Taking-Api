/*
 * Connecting the application with the database
 * or raise error
 */

import mongoose from "mongoose";

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('MongoDB connected : ',conn.connection.host);
  }
  catch (err){
    console.log('Failed to connect DB, ', err);
    process.exit(1);
  }
}


export default connectDB;




