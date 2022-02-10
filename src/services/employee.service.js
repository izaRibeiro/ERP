import EmployeeRepository from '../repositories/employee.repository.js'

async function getEmployees() {
    return await EmployeeRepository.getEmployees()
}

async function getEmployee(id) {
    return await EmployeeRepository.getEmployee(id)
}

async function createEmployee(employee) {
    return await EmployeeRepository.createEmployee(employee)
}

async function deleteEmployee(id) {
    return await EmployeeRepository.deleteEmployee(id)
}

async function updateEmployee(employee) {
    return await EmployeeRepository.updateEmployee(employee)
}

export default {
    getEmployees,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
}