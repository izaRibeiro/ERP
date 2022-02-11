import Product from '../models/Product.js'

async function getProducts() {
    return await Product.find()
}

async function getProduct(id) {
    return await Product.findById(id)
}

async function createProduct(employee) {
    return await Product.create(employee)
}

async function deleteProduct(id) {
    return await Product.deleteOne({ "_id": id })
}

async function updateProduct(employee) {
    return await Product.updateOne({ "_id": employee.id }, {
        $set: {
            name: employee.name,
        }
    })
}

export default {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}