import express from 'express'
import AuthController from '../controllers/auth.controller.js';

const router = express.Router();
router.post("/register", AuthController.register)
router.post("/authenticate", AuthController.authenticate)

export default router;