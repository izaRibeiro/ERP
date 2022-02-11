import Sale from '../models/Sale.js'

async function getTotalSales() {
    return await Sale.aggregate([
        { $group: { _id: null, "Total de vendas": { $sum: 1 } } },
        { $project: { _id: 0 } }
    ])
}

async function getTotalAmount() {
    return await Sale.aggregate([
        { $group: { _id: null, "Valor total adquirido": { $sum: '$amount' } } },
        { $project: { _id: 0 } }
    ])
}

async function getSellerSales(id) {
    return await Sale.aggregate([
        { $match: { employeeId: id } },
        { $group: { _id: null, "Número de vendas do lojista": { $sum: 1 } } },
        { $project: { _id: 0 } }
    ])
}

export default {
    getTotalSales,
    getTotalAmount,
    getSellerSales
}