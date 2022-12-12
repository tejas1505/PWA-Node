const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const port = 3000

router.get('/', (req, res)=>{
    res.render('../view/index.ejs')
})

module.exports = router