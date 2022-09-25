const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000  
app.use(cors())
app.get('/', (req, res) => {
    res.status(200).send('hello world')
})


app.listen(port, () => {
    console.log('running on port', port)
})