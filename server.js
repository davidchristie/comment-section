const express = require('express')

const routes = require('./routes')

const server = express()

// Routes
server.get('/', routes.getIndex)

module.exports = server
