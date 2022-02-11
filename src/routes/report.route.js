import express from 'express'
import ReportController from '../controllers/report.controller.js';
import authMiddleware from '../middlewares/auth.js'

const router = express.Router();

router.use(authMiddleware)

router.get("/", ReportController.getTotalSales)

export default router;