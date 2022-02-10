import express from 'express'
import EmployeeController from '../controllers/employee.controller.js';

const router = express.Router();
router.get("/:id", EmployeeController.getEmployee)

export default router;