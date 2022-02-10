import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import employeeRouter from './routes/employee.route.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

const app = express()
dotenv.config()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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