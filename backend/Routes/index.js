import { Router } from "express";
import authRoutes from './Auth.routes.js'
import gameRoutes from './Game.routes.js'

const router = Router()

router.use('/auth',authRoutes)
router.use('/game',gameRoutes)

export default router