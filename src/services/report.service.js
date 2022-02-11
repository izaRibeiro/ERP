import ReportRepository from '../repositories/report.repository.js'

async function getTotalSales() {
    return await ReportRepository.getTotalSales()
}

export default {
    getTotalSales,
}