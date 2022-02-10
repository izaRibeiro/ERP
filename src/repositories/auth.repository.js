import Employee from '../models/Employee.js'

async function register(employee) {
    return await Employee.create(employee)
}

export default {
    register,
}