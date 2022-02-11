import SaleService from '../services/sale.service.js'

async function getSales(req, res, next) {
    try {
        res.send(await SaleService.getSales())
    } catch (err) {
        next(err)
    }
}

async function getSale(req, res, next) {
    try {
        res.send(await SaleService.getSale(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function createSale(req, res, next) {
    try {
        res.send(await SaleService.createSale(req.body))
    } catch (err) {
        next(err)
    }
}

async function deleteSale(req, res, next) {
    try {
        res.send(await SaleService.deleteSale(req.params.id))
    } catch (err) {
        next(err)
    }
}

async function updateSale(req, res, next) {
    try {
        res.send(await SaleService.updateSale(req.body))
    } catch (err) {
        next(err)
    }
}

export default {
    getSales,
    getSale,
    createSale,
    deleteSale,
    updateSale
}