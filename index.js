var express = require('express')
var port = 3000

var BASE_API_PATH ="/api/v1"

var contacts = [
    {"name": "peter", "phone":"12345"},
    {"name": "harry", "phone":"66666"},
]

console.log("starting API server...")

var app = express();

app.get("/", (req, res) => {
    res.send("<html><body><h1>My Server</h1></body></html>")
})



app.get(BASE_API_PATH + "/contacts", (req, res) => {
    console.log(Date() + " - GET /contacts")
    res.send(contacts)
})

app.listen(port)

console.log("Server ready!")
