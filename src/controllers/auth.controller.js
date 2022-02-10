import AuthService from '../services/auth.service.js'
import Employee from '../models/Employee.js'

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

export default {
    register
}