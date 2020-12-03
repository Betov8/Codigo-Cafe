const express = require("express")
const bodyparser = require("body-parser")
const app =express()
const db = require("./routes")
const { request, response } = require("express")
const port = 3000
app.use(bodyparser.json())
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)
app.get("/",(request, response)=>{
    response.json({info:"Node.js,Express, and Postgress API"})
})
app.get("/users", db.getuser)
app.get("/users/:id", db.getuserbyid)
app.post("/users", db.createuser)
app.put("/users/:id", db.updateuser)
app.delete("/users/:id", db.deleteuser)

app.listen(port,() => {
    console.log("simple-espress-crud running on port ${port}.")
})
