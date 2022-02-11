import express from 'express'
import ReportController from '../controllers/report.controller.js';
import authMiddleware from '../middlewares/auth.js'
import permissionMiddleware from '../middlewares/permission.js'

const router = express.Router();

router.use(authMiddleware)
router.use(permissionMiddleware)

router.get("/", ReportController.getTotalSales)
router.get("/amount", ReportController.getTotalAmount)
router.get("/seller/:id", ReportController.getSellerSales)

export default router;