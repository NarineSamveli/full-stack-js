'use strict'

const sequelize = require('utils/sequelize')
const Sequelize = require('sequelize')

const Teacher = require('./teacher')
const Subject = require('./subject')
const Student = require('./student')

const schema = {
  value: {
    type: Sequelize.INTEGER
  }
}

const options = {}

const Mark = sequelize.define('Mark', schema, options)
Mark.belongsTo(Teacher)
Mark.belongsTo(Student)
Mark.belongsTo(Subject)

module.exports = Mark
