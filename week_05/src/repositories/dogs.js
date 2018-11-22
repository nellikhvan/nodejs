'use strict'

const errors = require('../utils/errors')
const { Dog } = require('./../database/models')

function findAll() {
    return Dog.query()
}

async function findById(id) {
    const dog = await Dog.query()
        .findById(id)

    if (!dog) {
        throw new errors.NotFoundError()
    }
    return dog
}


async function create(attributes) {
    const dog = await Dog.query()
        .insertAndFetch(attributes)

    return dog
}

module.exports = {
    findAll,
    findById,
    create,
}