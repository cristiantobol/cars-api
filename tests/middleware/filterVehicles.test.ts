import { applyFilters } from "../../middleware/filterVehicles"
import { Vehicle } from "../../repositories/vehicle-repository"
import { mockData } from "../mock"

describe("applyFilters", () => {
  const vehicles: Vehicle[] = mockData

  it("filters by make", () => {
    const filters = { make: "BMW" }
    const result = applyFilters(vehicles, filters)
    expect(result).toEqual([
      {
        make: "BMW",
        model: "1 SERIES",
        fuel_type: "Diesel",
        price: 12999,
        trim: "118d SE 5dr [Nav]",
        colour: "Alpine white",
        co2_level: 104,
        transmission: "Manual",
        engine_size: 1995,
        date_first_reg: new Date("2017-12-28"),
        mileage: 11271,
      },
      {
        make: "BMW",
        model: "1 SERIES",
        fuel_type: "Diesel",
        price: 14699,
        trim: "118d M Sport 5dr [Nav]",
        colour: "Melbourne red",
        co2_level: 114,
        transmission: "Manual",
        engine_size: 1995,
        date_first_reg: new Date("2017-12-28"),
        mileage: 13324,
      },
      {
        make: "BMW",
        model: "1 SERIES",
        fuel_type: "Diesel",
        price: 15499,
        trim: "118d M Sport 5dr [Nav/Servotronic]",
        colour: "Alpine white",
        co2_level: 120,
        transmission: "Manual",
        engine_size: 1995,
        date_first_reg: new Date("2017-12-28"),
        mileage: 20114,
      },
      {
        make: "BMW",
        model: "1 SERIES",
        fuel_type: "Diesel",
        price: 13799,
        trim: "116d SE Business 5dr [Nav/Servotronic]",
        colour: "Jet black",
        co2_level: 111,
        transmission: "Manual",
        engine_size: 1496,
        date_first_reg: new Date("2017-12-28"),
        mileage: 16759,
      },
    ])
  })
})

