'use strict'

const pkg = require('../../package')
const Sequelize = require('sequelize')
const database = new Sequelize('nodejs', 'nellikhvan', 'nellikhvan', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        min: process.env.DATABASE_POOL_MIN || 0,
        max: process.env.DATABASE_POOL_MAX || 5,
        acquire: 30000,
        idle: 10000
    },
})

module.exports = env => ({
    env,
    appName: pkg.name,
    version: pkg.version,
    server: {
        port: process.env.PORT || 3001,
        bodyParser: {
            patchKoa: true,
            urlencoded: true,
            text: false,
            json: true,
            multipart: false,
        },
        cors: {
            origin: '*',
            exposeHeaders: [
                'Authorization',
                'Content-Language',
                'Content-Length',
                'Content-Type',
                'Date',
                'ETag',
            ],
            maxAge: 3600,
        },
    },
    auth: {
        secret: process.env.AUTH_SECRET || 'htfq4o3bcyriq4wyvtcbyrwqv3fy53bprogc',
        saltRounds: 10,
        createOptions: {
            expiresIn: 60 * 60,
            algorithm: 'HS256',
            issuer: `com.strv.nodejs-nights.${env}`,
        },
        verifyOptions: {
            algorithm: 'HS256',
            issuer: `com.strv.nodejs-nights.${env}`,
        },
    },
    logger: {
        stdout: true,
        minLevel: 'debug',
    },
    database: database,
})