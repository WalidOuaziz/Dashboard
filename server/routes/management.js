import express from "express";
import {getAdmin, getUserPerformance} from "../controllers/management.js"

 
const router = express.Router()

router.get("/admin", getAdmin)
router.get("/performance", getUserPerformance)

export default router;