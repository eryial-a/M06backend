//setup
const express = require("express")
//require cor to run backend and frontend on same machine
var cors = require("cors")
// activate variable to be express server
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const Song = require("./models/songs")
app.use(cors())

app.use(bodyParser.json())

//grab all songs in database
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    } catch (err) {
        console.log(err)
    }
})

//grab a single song
router.get("/songs/:id", async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.json(song)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post("/songs", async (req, res) => {
    try {
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    } catch (err) {
        res.status(400).send(err)
    }
})

//update is to update an existing entry using a PUT request
router.put("/songs/:id", async (req, res) => {
    //first find and update the song the front end wants to update. 
    //to do so we need to request the id of the song from request
    //and find it in the DB and update it
    try {
        const song = req.body
        await Song.updateOne({_id: req.params.id},song)
        console.log(song)
        res.sendStatus(204)

    } catch (err) {
        res.status(400).send(err)
    }
})

//delete song
router.delete("/songs/:id", async (req, res) => {
    try {
        Song.deleteOne({_id: req.params.id})
        .then(result => {
            res.status(200).json(result)
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

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