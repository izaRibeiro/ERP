import express from 'express'
import EmployeeController from '../controllers/employee.controller.js';

const router = express.Router();
router.get("/", EmployeeController.getEmployees)
router.get("/:id", EmployeeController.getEmployee)
router.delete("/:id", EmployeeController.deleteEmployee)
router.put("/", EmployeeController.updateEmployee)

export default router;