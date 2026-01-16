import express from "express";
import { CreateContact } from "../Controllers/contactController.js";

const contacRouter = express.Router()

contacRouter.post("/create", CreateContact)

export default contacRouter;