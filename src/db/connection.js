import mongoose from "mongoose";


const Connection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Conneted successfully");
        
    } catch (error) {
        console.log("MONGODB connection error" , error);
        process.exit(1)
    }
}

export default Connection;