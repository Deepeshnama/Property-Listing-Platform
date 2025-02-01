import express from "express"
import connectDB from "./database/db.js"

const app = express()

app.listen(2300, () => {
    console.log("Server is listening on PORT : 2300")

    connectDB()
})