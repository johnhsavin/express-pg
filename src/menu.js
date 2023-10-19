// import client
import { client } from "./connectDb.js"

// function to get items
export async function getAllMenuItems(req, res) {
    const result = await client.query("SELECT * FROM menu" )
    res.send(result.rows)
}
//function to add menu items
export async function addMenuItem(req, res) {
    const body = req.body
    // const id = body.id
    // const name = body.name
    // const description = body.description
    // const price = body.price
    const { id, name, description, price } = body   // deconstruction method

    const result = await client.query(`insert into menu(id, name, description, price)
    values (${id}, '${name}', '${description}', ${price})`) //execute the query

    res.send(result)  // send result upon successful entry
}
