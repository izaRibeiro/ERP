import Employee from '../models/Employee.js'

async function getEmployees() {
    return await Employee.find()
}

async function getEmployee(id) {
    return await Employee.findById(id)
}

async function createEmployee(employee) {
    return await Employee.create(employee)
}

async function deleteEmployee(id) {
    return await Employee.deleteOne({ "_id": id })
}

async function updateEmployee(employee) {
    return await Employee.updateOne({ "_id": employee.id }, {
        $set: {
            nome: employee.nome,
        }
    })
}

export default {
    getEmployees,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
}