const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.URI)
.then(()=>{
    console.log("Connected to mongoose")
}).catch((err)=>{
    console.log(err)
})

const app = express()
const port =3000

app.listen(port, ()=>{
    console.log(`App is listining on port ${port}`)
})