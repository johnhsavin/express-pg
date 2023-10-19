// import tools and client
import express from "express"
import  cors from "cors"

import { client } from "./src/connectDb.js"
import { addMenuItem, getAllMenuItems } from "./src/menu.js"

const app = express()
app.use(cors())
app.use(express.json())

// add routes
app.get("/", (req, res) => {
    res.send("hello")
})

// get function route
app.get("/menu", getAllMenuItems)
// post function route
app.post("/menu", addMenuItem)

// add port
const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))