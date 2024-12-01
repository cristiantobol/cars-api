import { Router } from "express"
import { getCarsByMake, getCars, getCarsByModel } from "../controllers/cars.controller"
import filterVehicles from "../middleware/filterVehicles"

const router = Router()

router.get("/", filterVehicles, getCars)
router.get("/:make", filterVehicles, getCarsByMake)
router.get("/:make/:model", filterVehicles, getCarsByModel)

export default router

