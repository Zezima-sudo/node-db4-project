const express = require('express')
const helmet = require('helmet')
const RecipeRouter = require('./router/recipes-router')

const server = express()
server.use(helmet())
server.use(express.json())
server.use('/api/recipes', RecipeRouter)

const port = process.env.port || 8000

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'hello'
    })
})

module.exports = server