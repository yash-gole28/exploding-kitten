import { Router } from "express";
import { AddWin } from "../Controllers/Game.controller.js";


const router = Router()

router.post('/add-win',AddWin)



export default router