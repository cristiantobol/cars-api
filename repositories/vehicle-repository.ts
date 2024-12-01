import fs from "fs"

export type Vehicle = {
  price: number
  make: string
  model: string
  trim: string
  colour: string
  co2_level: number
  transmission: "Automatic" | "Manual"
  fuel_type: "Unleaded" | "Diesel" | "Electric" | "Hybrid"
  engine_size: number
  date_first_reg: Date
  mileage: number
}

class VehicleRepository {
  private _vehicles: Vehicle[]

  constructor() {
    const file = fs.readFileSync("./repositories/vehicles.json", "utf8")
    this._vehicles = JSON.parse(file)
  }

  getAll(): Vehicle[] {
    return this._vehicles
  }
}

export default VehicleRepository
