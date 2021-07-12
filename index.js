const express = require('express')

const app = express()
const port = 5000

app.listen(port, () => {
    console.log(`serve on ${port}`)
})

app.get('/', (req, res) => {
    return res.status(200).json('hello')
})
