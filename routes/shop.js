const express = require('express')
const path = require('path')
const router = express.Router()

const admin = require('./admin')

router.get('/', (req, res, next) => {
    console.log(admin.products)
    res.render('shop', { products: admin.products, title: "My Shop" })
})


module.exports = router