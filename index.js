import express from "express"
import connectDB from "./database/db.js"
import propertyRoutes from "./routes/property.routes.js"

const app = express()

app.use(express.json())

app.use("/property" , propertyRoutes )

app.listen(2300, () => {
    console.log("Server is listening on PORT : 2300")

    connectDB()
})