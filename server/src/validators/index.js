'use strict'

const emptyObject = require('./empty-object')
const emptySchemaWithId = require('./empty-schema-with-id')
const emptySchema = require('./empty-schema')
const markCreate = require('./mark-create')
const markUpdate = require('./mark-update')
const urlWithId = require('./url-with-id')
const login = require('./login')

module.exports = {
  emptyObject,
  emptySchema,
  emptySchemaWithId,
  markCreate,
  markUpdate,
  urlWithId,
  login
}
