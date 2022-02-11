import ProductService from '../services/product.service.js'

async function getProducts(req, res, next) {
    try {
        res.send(await ProductService.getProducts())
    } catch (err) {
        next(err)
    }
}

async function getProduct(req, res, next) {
    try {
        res.send(await ProductService.getProduct(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function createProduct(req, res, next) {
    try {
        res.send(await ProductService.createProduct(req.body))
    } catch (err) {
        next(err)
    }
}

async function deleteProduct(req, res, next) {
    try {
        res.send(await ProductService.deleteProduct(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function updateProduct(req, res, next) {
    try {
        res.send(await ProductService.updateProduct(req.body))
    } catch (err) {
        next(err)
    }
}

export default {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}