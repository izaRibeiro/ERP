import EmployeeService from '../services/employee.service.js'

async function getEmployees(req, res, next) {
    try {
        res.send(await EmployeeService.getEmployees())
    } catch (err) {
        next(err)
    }
}

async function getEmployee(req, res, next) {
    try {
        res.send(await EmployeeService.getEmployee(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function getEmployeeByEmail(req, res, next) {
    try {
        res.send(await EmployeeService.getEmployeeByEmail(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function deleteEmployee(req, res, next) {
    try {
        res.send(await EmployeeService.deleteEmployee(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function updateEmployee(req, res, next) {
    try {
        res.send(await EmployeeService.updateEmployee(req.body))
    } catch (err) {
        next(err)
    }
}

export default {
    getEmployees,
    getEmployee,
    getEmployeeByEmail,
    deleteEmployee,
    updateEmployee
}