import AuthRepository from '../repositories/auth.repository.js'

async function register(employee) {
    return await AuthRepository.register(employee)
}

async function authenticate(employee) {
    return employee
}

export default {
    register,
    authenticate
}