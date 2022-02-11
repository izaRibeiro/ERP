import employeeRepository from "../repositories/employee.repository.js"

export default async(req, res, next) => {
    const email = req.headers.email
    if (!email) res.status(401).send({ error: "Usuário não autorizado" })

    const employee = await employeeRepository.getEmployeeByEmail(email)
    if (employee.type != 'admin') res.status(401).send({ error: "Usuário não autorizado" })
    return next()
}