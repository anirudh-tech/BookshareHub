const mongoose = require('mongoose')
const uri = "mongodb+srv://anirudhjagath2002:Rqb7zYFbJuk7bBOo@cluster0.bz87sjs.mongodb.net/?retryWrites=true&w=majority"; 


mongoose.connect(uri)
mongoose.connection.on('connected',()=>{
    console.log("connected to database");
})
mongoose.connection.on('disconnected',()=>{
    console.log("disconnected from database");
})