// connect to db
import pg from "pg"
const { Client } = pg
// import connection string credentials
import connectionString from "./secrets.js"
// creating the class object out of pg to connect to db
export const client = new Client({
connectionString
})

await client.connect()
.catch(console.error)