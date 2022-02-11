import SaleRepository from '../repositories/sale.repository.js'

async function getSales() {
    return await SaleRepository.getSales()
}

async function getSale(id) {
    return await SaleRepository.getSale(id)
}

async function createSale(employee) {
    return await SaleRepository.createSale(employee)
}

async function deleteSale(id) {
    return await SaleRepository.deleteSale(id)
}

async function updateSale(employee) {
    return await SaleRepository.updateSale(employee)
}

export default {
    getSales,
    getSale,
    createSale,
    deleteSale,
    updateSale
}