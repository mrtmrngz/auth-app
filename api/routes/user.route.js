import express from "express";
import {all_users, user_info} from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";
import verify_admin from "../middlewares/verifyAdmin.js";


const router = express.Router()

router.get('/user-info', verifyToken, user_info)
router.get('/all-users', [verifyToken, verify_admin], all_users)

export default router