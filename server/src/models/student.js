'use strict'

const sequelize = require('utils/sequelize')

const User = require('./user')
const Class = require('./class')

const schema = {}

const Student = sequelize.define('Student', schema)
Student.belongsTo(User)
Student.belongsTo(Class)


module.exports = Student

