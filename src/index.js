const express = require('express')
const port = process.env.PORT || 3000

// app.use((req, res) => {
//     res.status(503).send('Site under mantainance')
// })

app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})