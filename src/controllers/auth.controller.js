import AuthService from '../services/auth.service.js'
import Employee from '../models/Employee.js'
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json'

async function register(req, res, next) {
    const { email } = req.body

    try {
        if (await Employee.findOne({ email })) {
            return res.status(400).send({ error: 'O funcionário já existe' })
        }
        res.status(200).send(await AuthService.register(req.body))
    } catch (err) {
        next(err)
    }
}

async function authenticate(req, res, next) {
    const { email, password } = req.body

    try {
        const employee = await Employee.findOne({ email }).select('+password')
        if (!employee) return res.status(404).send('Funcionário não encontrado')
        if (!await bcrypt.compare(password, employee.password)) return res.status(400).send('Senha inválida')
        employee.password = undefined

        const token = jwt.sign({ id: employee.id }, authConfig.secret, {
            expiresIn: 60000
        })
        res.status(200).send(await AuthService.authenticate({ employee, token }))
    } catch (err) {
        next(err)
    }
}

export default {
    register,
    authenticate
}