import { Request, Response } from "express"
import VehicleRepository, { Vehicle } from "../repositories/vehicle-repository"

const repository = new VehicleRepository()

export const getCars = (_: Request, res: Response) => {
  try {
    const vehicles = repository.getAll()
    res.status(200).json(vehicles)
  } catch (error) {
    console.error(error)
    res.status(500).send("An error occurred while fetching vehicles")
  }
}

export const getCarsByMake = (req: Request, res: Response) => {
  try {
    const { make } = req.params
    const vehicles = repository.getAll()
    const filteredVehicles = vehicles.filter((v: Vehicle) => v.make?.toLocaleLowerCase() === make?.toLocaleLowerCase())

    if (filteredVehicles.length === 0) {
      return res.status(404).send({ message: `No results found for ${make}` })
    }

    res.status(200).json(filteredVehicles)
  } catch (error) {
    console.error(error)
    res.status(500).send("An error occurred while fetching vehicles")
  }
}

export const getCarsByModel = (req: Request, res: Response) => {
  try {
    const { model, make } = req.params
    const vehicles = repository.getAll()
    const filteredVehicles = vehicles.filter(
      (v: Vehicle) =>
        v.model?.toLocaleLowerCase() === model?.toLocaleLowerCase() &&
        v.make?.toLocaleLowerCase() === make?.toLocaleLowerCase()
    )

    if (filteredVehicles.length === 0) {
      return res.status(404).send({ message: `No results found for ${model}` })
    }

    res.status(200).json(filteredVehicles)
  } catch (error) {
    console.error(error)
    res.status(500).send("An error occurred while fetching vehicles")
  }
}

