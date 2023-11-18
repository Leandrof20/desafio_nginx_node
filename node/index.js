const express = require('express')
const app = express()
const porta = 8080
const connection = require('./database/Connection')

app.get('/hello', async (req, res) => {
    res.sendStatus(200)
})

app.get('/', async (req, res) => {
    connection.query('SELECT * from people', function (error, results) {
        if(error) {
            console.log(error)
            res.json(error).status(500)
        } else {
            res.send(`
                <h1>Full Cycle Rocks!</h1>
                <ul>
                    ${results.map(result => `<li>${result.nome}</li>`).join('')}
                </ul>
            `)
        }
    })
})

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}`)
})