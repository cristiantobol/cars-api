import { Request, Response } from "express"
import VehicleRepository from "../repositories/vehicle-repository"

const repository = new VehicleRepository()

export const getCars = (_: Request, res: Response) => {
  try {
    const vehicles = repository.getAll()
    res.status(200).json(vehicles)
  } catch (error) {
    res.status(500).send("An error occurred while fetching vehicles")
  }
}

