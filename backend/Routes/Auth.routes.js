import { Router } from "express";
import { CurrentUser, Login, Register } from "../Controllers/Auth.controller.js";

const router = Router()

router.post('/login',Login)
router.post('/register',Register)
router.post('/currentUser',CurrentUser)


export default router