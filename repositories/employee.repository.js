import Employee from '../models/Employee.js'

async function getEmployee(id) {
    return await Employee.findById(id)
}

export default {
    getEmployee,
}