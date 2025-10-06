const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:sdev255group5@songdb.vzhgmai.mongodb.net/?retryWrites=true&w=majority&appName=songDB", {useNewURLParser: true})

module.exports = mongoose

