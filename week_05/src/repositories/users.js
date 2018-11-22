'use strict'

const errors = require('../utils/errors')
const { User } = require('./../database/models')

function findAll() {
    return User.query()
}

async function findById(id) {
    const user = await User.query()
        .findById(id)
    if (!user) {
        throw new errors.NotFoundError()
    }
    return user
}

async function findByEmail(email) {
    const user = await User.query()
        .where('email', email)
        .first()
    if (!user) {
        throw new errors.NotFoundError()
    }
    return user
}
async function create(attributes) {
    const user = await User.query()
        .insertAndFetch(attributes)
    return user
}

module.exports = {
    findAll,
    findById,
    findByEmail,
    create,
}