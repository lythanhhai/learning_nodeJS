const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    console.log(req.body.name)
    res.send("test form")
})

module.exports = router