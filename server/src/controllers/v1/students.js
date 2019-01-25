'use strict'

const express = require('express')
const { Student, User, Class } = require('models')
const { mapList, mapStudentCore, mapStudentExtended } = require('utils/entity-mappers')
const { NotFoundError } = require('errors')
const { asyncMiddleware, validateMiddleware, checkAuthenticated } = require('utils/middlewares')

const router = new express.Router()

router.get('/',
  checkAuthenticated(),
  validateMiddleware('emptySchema'),
  asyncMiddleware(async (req, res) => {
    const students = await Student.findAndCountAll({
      include: [
        { model: User },
        { model: Class }
      ]
    })
    const studentsFormatted = mapList(mapStudentCore)(students)
    res.json(studentsFormatted)
  }))

router.get('/:id',
  checkAuthenticated([ Student ]),
  validateMiddleware('emptySchemaWithId'),
  asyncMiddleware(async ({ params: { id } }, res) => {
    const student = await Student.findById(id, {
      include: [
        { model: User },
        { model: Class }
      ]
    })

    if (!student) {
      throw new NotFoundError(`Student ${id} not found`)
    }

    const studentFormatted = mapStudentExtended(student)
    res.json(studentFormatted)
  }))

module.exports = router
