import express from 'express'
import SaleController from '../controllers/sale.controller.js';
import authMiddleware from '../middlewares/auth.js'

const router = express.Router();

router.use(authMiddleware)

router.get("/", SaleController.getSales)
router.get("/:id", SaleController.getSale)
router.post("/", SaleController.createSale)
router.delete("/:id", SaleController.deleteSale)
router.put("/", SaleController.updateSale)

export default router;