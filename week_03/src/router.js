'use strict'

const Router = require('koa-router')
const dogs = require('./dogs')
const { validate } = require('./utils/validation')

const schema = {
  type: 'Object',
  required: true,
  properties: {
    id: {
      type: 'integer',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    breed: {
      type: 'string',
      required: true,
    },
    birthYear: {
      type: 'number',
    },
    photo: {
      type: 'string',
      format: 'url',
    },
  },
}

const router = new Router()

router.get('/dogs', ctx => {
  ctx.body = dogs
})

router.get('/dogs/:id', ctx => {
  const dog = dogs.find(item => item.id === Number(ctx.params.id))

  if (!dog) {
    ctx.status = 404
    return
  }

  ctx.body = dog
})

// create
router.post('/dogs', ctx => {
  const validation = validate(ctx.request.body, schema)
  if (!validation.valid) {
    ctx.status = 400
    ctx.body = {
      errors: validation.errors,
    }
    return
  }
  dogs.push(ctx.request.body)

  ctx.body = dogs
})

// update
router.put('/dogs/:id', ctx => {
    const dog = dogs.findIndex(item => item.id === Number(ctx.params.id))
    const validation = validate(ctx.request.body, schema)
    if (!dog) {
        ctx.status = 404
        return
    }
    if (!validation.valid) {
        ctx.status = 400
        ctx.body = {
            errors: validation.errors,
        }
        return
    }
    dogs.splice(dog, 1, ctx.request.body)
    ctx.body = dogs

})

// delete
router.delete('/dogs/:id', ctx => {
  const dog = dogs.findIndex(item => item.id === Number(ctx.params.id))

  if (!dog) {
    ctx.status = 404
    return
  }
    dogs.splice(dog, 1)
    ctx.body = dogs

})

module.exports = router.routes()

