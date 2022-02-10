import EmployeeService from '../services/employee.service.js'

async function getEmployee(req, res, next) {
    try {
        res.send(await EmployeeService.getEmployee(req.params.id))
    } catch (err) {
        next(err)
    }
}

export default {
    getEmployee,
}