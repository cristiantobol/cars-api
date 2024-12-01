import express, { Express, Request, Response } from "express"
import carsRoutes from "./routes/cars.routes"

const app: Express = express()
const port = 3000

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World")
})

app.use("/", carsRoutes)

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})
