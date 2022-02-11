import express from 'express'
import EmployeeController from '../controllers/employee.controller.js';
import authMiddleware from '../middlewares/auth.js'

const router = express.Router();

router.use(authMiddleware)

router.get("/", EmployeeController.getEmployees)
router.get("/:id", EmployeeController.getEmployee)
router.delete("/:id", EmployeeController.deleteEmployee)
router.put("/", EmployeeController.updateEmployee)

export default router;