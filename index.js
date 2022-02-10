import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import employeeRouter from './routes/employee.route.js'

const app = express()
dotenv.config()

mongoose.connect(
    `${process.env.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json())
app.use('/employee', employeeRouter)

app.listen(3000, () => {
    console.log('API Iniciada!!')
})