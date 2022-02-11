import Sale from '../models/Sale.js'

async function getSales() {
    return await Sale.find()
}

async function getSale(id) {
    return await Sale.findById(id)
}

async function createSale(employee) {
    return await Sale.create(employee)
}

async function deleteSale(id) {
    return await Sale.deleteOne({ "_id": id })
}

async function updateSale(employee) {
    return await Sale.updateOne({ "_id": employee.id }, {
        $set: {
            amount: employee.amount,
        }
    })
}

export default {
    getSales,
    getSale,
    createSale,
    deleteSale,
    updateSale
}