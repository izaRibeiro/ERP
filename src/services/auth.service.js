import AuthRepository from '../repositories/auth.repository.js'

async function register(employee) {
    return await AuthRepository.register(employee)
}

export default {
    register
}