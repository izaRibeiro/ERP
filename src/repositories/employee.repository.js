import Employee from '../models/Employee.js'

async function getEmployees() {
    return await Employee.find()
}

async function getEmployee(id) {
    return await Employee.findById(id)
}

async function deleteEmployee(id) {
    return await Employee.deleteOne({ "_id": id })
}

async function updateEmployee(employee) {
    return await Employee.updateOne({ "_id": employee.id }, {
        $set: {
            name: employee.name,
        }
    })
}

export default {
    getEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee
}