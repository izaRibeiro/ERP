import Sale from '../models/Sale.js'

async function getTotalSales() {
    return await Sale.aggregate([
        { $group: { _id: null, total: { $sum: 1 } } },
        { $project: { _id: 0 } }
    ])
}

export default {
    getTotalSales,
}