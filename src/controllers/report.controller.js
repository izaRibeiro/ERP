import ReportService from '../services/report.service.js'

async function getTotalSales(req, res, next) {
    try {
        res.send(await ReportService.getTotalSales())
    } catch (err) {
        next(err)
    }
}

export default {
    getTotalSales,
}