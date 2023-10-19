const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.route.js')
const authRouter = require('./routes/auth.route.js')

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
app.use(express.json())

app.listen(port, ()=>{
    console.log(`App is listining on port ${port}`)
})

app.use('/api/v1',userRouter)
app.use('/api/auth',authRouter)