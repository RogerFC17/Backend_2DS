// importação moderna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})
app.get('/livros', (req, res) => {
    res.send('Meu livro de ciências!')
})

app.listen(3000, ()=> {console.log('Servidor está vivo!')})