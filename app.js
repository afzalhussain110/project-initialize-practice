import express from "express";
import cors from "cors"
import { CreateContact } from "./Controllers/contactController.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use("/contact", CreateContact)

export default app;