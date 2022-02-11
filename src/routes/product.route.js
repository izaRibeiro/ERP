import express from 'express'
import ProductController from '../controllers/product.controller.js';
import authMiddleware from '../middlewares/auth.js'

const router = express.Router();

router.use(authMiddleware)

router.get("/", ProductController.getProducts)
router.get("/:id", ProductController.getProduct)
router.post("/", ProductController.createProduct)
router.delete("/:id", ProductController.deleteProduct)
router.put("/", ProductController.updateProduct)

export default router;