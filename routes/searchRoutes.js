import express from "express";
const router = express.Router();

//require the controllers
import { search } from "../controllers/searchController.js";

//routes
router.route("/").post(search);

export default router;
