import ProductRepository from '../repositories/product.repository.js'

async function getProducts() {
    return await ProductRepository.getProducts()
}

async function getProduct(id) {
    return await ProductRepository.getProduct(id)
}

async function createProduct(employee) {
    return await ProductRepository.createProduct(employee)
}

async function deleteProduct(id) {
    return await ProductRepository.deleteProduct(id)
}

async function updateProduct(employee) {
    return await ProductRepository.updateProduct(employee)
}

export default {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}