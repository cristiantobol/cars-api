import { Request, Response } from "express"

export const getCars = (_: Request, res: Response) => {
  const vehicles = res.locals.vehicles
  const pagination = res.locals.pagination

  if (vehicles.length === 0) {
    return res.status(404).json({ message: "No cars found for the selected make" })
  }

  res.status(200).json({
    vehicles,
    pagination,
  })
}

export const getCarsByMake = (req: Request, res: Response) => {
  const vehicles = res.locals.vehicles
  const pagination = res.locals.pagination

  if (vehicles.length === 0) {
    return res.status(404).json({ message: "No cars found for the selected make" })
  }

  res.status(200).json({
    vehicles,
    pagination,
  })
}

export const getCarsByModel = (req: Request, res: Response) => {
  const vehicles = res.locals.vehicles
  const pagination = res.locals.pagination

  if (vehicles.length === 0) {
    return res.status(404).json({ message: "No cars found for the selected make" })
  }

  res.status(200).json({
    vehicles,
    pagination,
  })
}

