import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://dharamdev2005:shikha1982@cluster0.jyu0e8q.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
