import { Router } from "express"
import { getCarsByMake, getCars, getCarsByModel } from "../controllers/cars.controller"

const router = Router()

router.get("/cars", getCars)
router.get("/cars/:make", getCarsByMake)
router.get("/cars/:make/:model", getCarsByModel)

export default router
