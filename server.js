import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({quiet:true})

const Db = process.env.Database

mongoose.set({strictQuery:true})

try {
    
    mongoose.connect(Db)
     console.log("Connected")

} catch (error) {
    
    console.log(error)
    console.log("Not Connected")
}

const Port = process.env.Port

app.listen(Port, () => {
    console.log(`Server is running: ${Port}`)
})