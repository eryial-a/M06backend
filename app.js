//setup
const express = require("express")
//require cor to run backend and frontend on same machine
var cors = require("cors")
// activate variable to be express server
const app = express()
app.use(cors())
const router = express.Router()


//start web server app.listen(portnumber,function)
// app.listen(3000, function(){
//     console.log("Listening on port 3000")
// });

//making api using routes
//routes used to handle browser requests like URLs. Routes are dynamically handled by a function.

//GET or regular request when someone goes to http://localhost:3000/hello 
//Using a function in a route needs a parameter or handle a response/request

// app.get("/hello", function(req,res) {
//     res.send("<h1>Hello Express</h1>")
// });
// app.get("/goodbye", function(req,res) {
//     res.send("<h1>Goodbye, Express</h1>")
// });

// router.get("/songs", function (req, res) {
//     const songs = [
//         {
//             title: "Brightest Heart",
//             artist: "Oguri Cap",
//             popularity: 10,
//             genre: ["funk", "jpop"]
//         },
//         {
//             title: "Happy",
//             artist: "Pharrel Williams",
//             popularity: 9,
//             genre: ["soul", "new soul"]
//         }
//     ]
//     res.json(songs)
// })

//all request that usually use an api start with /api - url is localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)