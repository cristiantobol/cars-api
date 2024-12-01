import { Request, Response, NextFunction } from "express"
import VehicleRepository, { Vehicle } from "../repositories/vehicle-repository"

const repository = new VehicleRepository()

export const applyFilters = (vehicles: Vehicle[], filters: Record<string, any>) => {
  return vehicles.filter((vehicle) => {
    const { make, model, fuelType, minPrice, maxPrice } = filters

    if (make && vehicle.make.toLowerCase() !== make.toLowerCase()) return false

    if (model && vehicle.model.toLowerCase() !== model.toLowerCase()) return false

    if (fuelType && vehicle.fuel_type.toLowerCase() !== fuelType.toLowerCase()) return false

    if (minPrice !== undefined && vehicle.price < minPrice) return false
    if (maxPrice !== undefined && vehicle.price > maxPrice) return false

    return true
  })
}

const filterVehicles = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { make, model } = req.params
    const { fuelType, minPrice, maxPrice, page = 1, limit = 10 } = req.query

    let vehicles = repository.getAll()

    const filters: Record<string, any> = {
      make,
      model,
      fuelType,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    }

    const pageNumber = Number(page)
    const pageLimit = Number(limit)

    if (filters.minPrice && isNaN(filters.minPrice)) {
      return res.status(400).json({ message: "Invalid minPrice parameter" })
    }
    if (filters.maxPrice && isNaN(filters.maxPrice)) {
      return res.status(400).json({ message: "Invalid maxPrice parameter" })
    }

    vehicles = applyFilters(vehicles, filters)

    const totalVehicles = vehicles.length
    const totalPages = Math.ceil(totalVehicles / pageLimit)
    const skip = (pageNumber - 1) * pageLimit
    const paginatedVehicles = vehicles.slice(skip, skip + pageLimit)

    if (paginatedVehicles.length === 0) {
      return res.status(404).json({ message: "No cars found with the given filters" })
    }

    res.locals.vehicles = paginatedVehicles
    res.locals.pagination = {
      totalVehicles,
      totalPages,
      currentPage: pageNumber,
      pageLimit,
    }

    next()
  } catch (error) {
    console.error(error)
    res.status(500).send("An error occurred while fetching vehicles")
  }
}

export default filterVehicles

