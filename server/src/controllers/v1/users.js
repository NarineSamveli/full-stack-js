
'use strict'

const express = require('express')
const { User } = require('models')
const { mapList, mapUserCore, mapUserExtended } = require('utils/entity-mappers')
const { NotFoundError } = require('errors')
const { asyncMiddleware, validateMiddleware, checkAuthenticated } = require('utils/middlewares')

const router = new express.Router()

router.get('/',
  checkAuthenticated(),
  validateMiddleware('emptySchema'),
  asyncMiddleware(async (req, res) => {
    const users = await User.findAndCountAll({
      include: [
        { model: User },
        { model: Subject }
      ]
    })

    if (!users) {
        throw new NotFoundError(`User not found`)
      }

    const usersFormatted = mapList(mapUserCore)(users)
    res.json(usersFormatted)
  }))

module.exports = router
