const AnilloRoutes = require('express').Router()
const { getAllAnillos } = require('./anillos.controller')

AnilloRoutes.get('/', getAllAnillos)

module.exports = AnilloRoutes