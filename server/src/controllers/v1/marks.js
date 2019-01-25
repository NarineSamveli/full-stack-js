'use strict'

const express = require('express')
const { Subject, Mark, Teacher, Student } = require('models')
const { mapList, mapMarkCore } = require('utils/entity-mappers')
const { asyncMiddleware, validateMiddleware, checkAuthenticated } = require('utils/middlewares')

const router = new express.Router()

router.get('/',
  checkAuthenticated(),
  validateMiddleware('emptySchema'),
  asyncMiddleware(async (req, res) => {
    const marks = await Mark.findAndCountAll({
      include: [
        { model: Subject }
      ]
    })
    const marksFormatted = mapList(mapMarkCore)(marks)
    res.json(marksFormatted)
  }))

  router.get('/:id',
  checkAuthenticated([ Teacher, Student ]),
  validateMiddleware('emptySchemaWithId'),
  asyncMiddleware(async ({ params: { id } }, res) => {
    const marks = await Mark.findById(id, {
      include: [
        { model: Subject }
      ]
    })

    if (!marks) {
      throw new NotFoundError(`Mark ${id} not found`)
    }

    const markFormatted = mapMarkExtended(mark)
    res.json(markFormatted)
  }))

router.post('/',
  checkAuthenticated([ Teacher, Student ]),
  validateMiddleware('markCreate'),
  asyncMiddleware(async ({ body: markData, authenticatedUser }, res) => {
    const mark = await Mark.create({
      TeacherId: authenticatedUser.id,
      SubjectId: authenticatedUser.SubjectId,
      ...markData
    })
    const markFormatted = mapMarkCore({ Subject: authenticatedUser.Subject, ...mark.get() })
    res.json(markFormatted)
  }))

  router.put('/:id',
  checkAuthenticated([ Teacher ]),
  validateMiddleware('markUpdate'),
  asyncMiddleware(async ({ params: { id } }, res) => {
    const markUpdate = await Mark.update(
      { value: value },
      { where: {id: id}} 
    )

    if (!markUpdate[0]) {
      throw new NotFoundError(`Mark ${id} not found`)
    }

    const markUpdated = await Mark.findById(id, {
      include: [
        { model: Subject }
      ]
    })

    const markFormatted = mapMarkCore(markUpdated)
    res.json(markFormatted)
  }))


module.exports = router
