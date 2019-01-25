'use strict'

const teachers = require('./teachers')
const students = require('./students')
const marks = require('./marks')
const security = require('./security')

const classes = require('./classes')
const subjects = require('./subjects')
const users = require('./users')

module.exports = {
  teachers,
  students,
  marks,
  security,
  
  classes,
  subjects,
  users
}
