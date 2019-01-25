'use strict'

const express = require('express')
const { Teacher, User, Subject, Class, Student } = require('models')
const { mapList, mapSubjectCore, mapSubjectExtended } = require('utils/entity-mappers')
const { NotFoundError } = require('errors')
const { asyncMiddleware, validateMiddleware, checkAuthenticated } = require('utils/middlewares')

const router = new express.Router()

router.get('/',
  checkAuthenticated(),
  validateMiddleware('emptySchema'),
  asyncMiddleware(async (req, res) => {
    const subjects = await Subject.findAndCountAll()

    const subjectsFormatted = mapList(mapSubjectCore)(subjects)
    res.json(subjectsFormatted)
  }))

router.get('/:id',
  checkAuthenticated([ Teacher, Student ]),
  validateMiddleware('emptySchemaWithId'),
  asyncMiddleware(async ({ params: { id } }, res) => {
    const subject = await Subject.findById(id, {
      include: [        
        { model: Subject }
      ]
    })

    if (!subject) {
      throw new NotFoundError(`Subject ${id} not found`)
    }

    const subjectFormatted = mapSubjectExtended(subject)
    res.json(subjectFormatted)
  }))

module.exports = router
