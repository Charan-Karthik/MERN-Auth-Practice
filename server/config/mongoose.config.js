const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/mern-auth-practice")
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));