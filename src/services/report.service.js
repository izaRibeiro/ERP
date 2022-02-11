import ReportRepository from '../repositories/report.repository.js'

async function getTotalSales() {
    return await ReportRepository.getTotalSales()
}

async function getTotalAmount() {
    return await ReportRepository.getTotalAmount()
}

async function getSellerSales(id) {
    return await ReportRepository.getSellerSales(id)
}

export default {
    getTotalSales,
    getTotalAmount,
    getSellerSales
}