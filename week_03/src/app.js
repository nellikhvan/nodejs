'use strict'

const Koa = require('koa')
const koaCompress = require('koa-compress')
const koaCors = require('kcors')
const koaBody = require('koa-body')
const router = require('./router')
const config = require('./config')
const log = require('./logger')

const app = new Koa()

app.use(koaCompress())
app.use(koaCors())
app.use(koaBody())

app.use(router)

app.listen(config.port, () => log.info('Server is up'))
