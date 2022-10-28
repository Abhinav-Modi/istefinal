const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
var cacheService = require("express-api-cache");
var cache = cacheService.cache;
const { createProxyMiddleware } = require('http-proxy-middleware');





const app=express()
const port=8000
const url="mongodb+srv://ISTE:manipalchapteriste@cluster0.dnubiux.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json({extended:false}))
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
try{
    con.on('open',()=>{
        console.log("Database Connected")
    })
}catch(err){
    console.log(err)
}

// app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:8000/',
//       changeOrigin: true,
//     })
// )




app.get('/api',(req,res)=>{
    res.send("API hai yeh")
})

const adminrouter=require('./Routes/Admin')
app.use('/admin',adminrouter)


const boardRouter=require('./Routes/Manual/Board')
app.use('/board',boardRouter)

const eventRouter=require('./Routes/Manual/Event')
app.use('/event',eventRouter)

const acumenRouter=require('./Routes/Manual/Acumen')
app.use('/acumen',acumenRouter)

const TimerRouter=require('./Routes/Manual/Timer')
app.use('/timer',TimerRouter)

const emailRouter=require('./Routes/Manual/Email')
app.use('/email',emailRouter)

const MCWCRouter=require('./Routes/Manual/MCWC')
app.use('/MCWC',MCWCRouter)


app.listen((process.env.PORT||8000),()=>{
    console.log("Listening to port "+port)

})

