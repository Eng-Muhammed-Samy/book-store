const express = require('express')
const admin = require('./routes/admin')
const shop = require('./routes/shop')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

//set global configuration
app.set('view engine', "pug")
app.set('views', "views")

app.use(bodyParser.urlencoded({ extended: false }))
// add static folder to serve some file without using express
app.use(express.static(path.join(__dirname, "public")))
app.use("/admin", admin.router)
app.use(shop)

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"))
    res.render('404', { title: "404 Error" })
})

app.listen(3000, () => console.log(`server running on port ${3000}`))