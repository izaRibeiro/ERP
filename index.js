import express from 'express'
import mongoose from 'mongoose'
import EmployeeSchema from './models/Employee.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

mongoose.connect(
    `${process.env.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json())

app.listen(3000, () => {
    console.log('API Iniciada!!')
})