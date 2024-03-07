const express = require("express")
const app = express()
const path = require('path')
const userRouter = require('./routers/userRouter')
const adminRouter = require('./routers/adminRouter')
const renterRouter = require('./routers/renterRouter')
const sellerRouter = require('./routers/sellerRouter')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const db = require('./config/dbConnection')
const flash = require('express-flash');
// require('./utility/cron')
require('dotenv').config()

const ejs = require('ejs')

app.use(flash());
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "vendor")));
app.use(express.static(path.join(__dirname, "css")));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"views"))
app.set('view engine','ejs')
app.use(session({
    secret: 'awertfhyjgfdsrestdxfhcygvjbrdxghfcgvjbm', 
    resave: false,
    saveUninitialized: true,
  }))
  app.use((req,res,next)=>{
    res.set('Cache-Control','no-store')
    next();
  })
app.use(cookieParser())

app.use("/login",(req,res)=> {
  res.render('user/login')
})

app.use("/user",userRouter)
app.use('/admin',adminRouter)
app.use('/seller',sellerRouter)
app.use('/renter',renterRouter)

app.use("*", (req,res) => {
  res.render('errorpage')
})

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`connected successfully at ${PORT}`);
})

