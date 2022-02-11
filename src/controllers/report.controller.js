import ReportService from '../services/report.service.js'

async function getTotalSales(req, res, next) {
    try {
        res.send(await ReportService.getTotalSales())
    } catch (err) {
        next(err)
    }
}

async function getTotalAmount(req, res, next) {
    try {
        res.send(await ReportService.getTotalAmount(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function getSellerSales(req, res, next) {
    try {
        res.send(await ReportService.getSellerSales(req.params.id))
    } catch (err) {
        next(err)
    }
}

export default {
    getTotalSales,
    getTotalAmount,
    getSellerSales,
}