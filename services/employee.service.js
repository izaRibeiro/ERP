import EmployeeRepository from '../repositories/employee.repository.js'

async function getEmployee(id) {
    return await EmployeeRepository.getEmployee(id)
}

export default {
    getEmployee,
}