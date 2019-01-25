'use strict'

const express = require('express')
const { Teacher, User, Subject, Class, Student } = require('models')
const { mapList, mapClassCore, mapClassExtended } = require('utils/entity-mappers')
const { NotFoundError } = require('errors')
const { asyncMiddleware, validateMiddleware, checkAuthenticated } = require('utils/middlewares')

const router = new express.Router()

router.get('/',
  checkAuthenticated(),
  validateMiddleware('emptySchema'),
  asyncMiddleware(async (req, res) => {
    const classes = await Class.findAndCountAll()

    const classesFormatted = mapList(mapClassCore)(classes)
    res.json(classesFormatted)
  }))

router.get('/:id',
  checkAuthenticated([ Teacher, Student ]),
  validateMiddleware('emptySchemaWithId'),
  asyncMiddleware(async ({ params: { id } }, res) => {
    const classes = await Class.findById(id, {
      include: [
        { model: Class }
      ]
    })

    if (!classes) {
      throw new NotFoundError(`Class ${id} not found`)
    }

    const classFormatted = mapClassExtended(classes)
    res.json(classFormatted)
  }))

module.exports = router
