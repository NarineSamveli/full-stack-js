'use strict'

const { Teacher, Student } = require('models')
const config = require('config')
const { InternalServerError } = require('errors')

const mapList = (mapEntityFn) => ({ count, rows }) => ({
  count,
  entities: rows.map(mapEntityFn)
})

const mapTeacherCore = ({ id, User, Subject }) => ({
  id,
  ...mapUserCore(User),
  subject: mapSubjectCore(Subject)
})
const mapStudentCore = ({ id, User, Class }) => ({
  id,
  ...mapUserCore(User),
  class: mapClassCore(Class)
})

const mapTeacherExtended = ({ id, User, Subject, Classes }) => ({
  id,
  ...mapUserExtended(User),
  subject: mapSubjectCore(Subject),
  classes: Classes.map(mapClassCore)
})
const mapStudentExtended = ({ id, User, Class }) => ({
  id,
  ...mapUserExtended(User),
  class: mapClassCore(Class),
})
const mapClassExtended = ({ id, name, Students }) => {
  return( {
    id,
    name,
    Students: Students.map(mapStudentCore)
})}

const mapUserCore = ({ name }) => ({ name })
const mapUserExtended = ({ name, address, phone }) => ({ name, address, phone })

const mapSubjectCore = ({ id, name }) => ({ id, name })

const mapMarkCore = ({ id, value, Subject, Student, Class }) => ({
  id,
  value,
  subject: mapSubjectCore(Subject), 
  student: mapStudentCore(Student),
  class: mapClassCore(Class)
})

const mapClassCore = ({ id, name }) => ({ id, name })

const roles = config.get('security.roles')
const mapUserRole = (modelInstance) => {
  if (modelInstance instanceof Teacher) {
    return roles.teacher
  }else if (modelInstance instanceof Student) {
    return roles.student
  }
  throw new InternalServerError('Unknown role')
}
const mapUserInfo = (modelInstance) => ({
  id: modelInstance.id,
  name: modelInstance.User.name,
  role: mapUserRole(modelInstance)
})

module.exports = {
  mapSubjectCore,
  mapTeacherCore,
  mapStudentCore,
  mapTeacherExtended,
  mapStudentExtended,
  mapClassExtended,
  mapUserExtended,
  mapUserCore,
  mapClassCore,
  mapList,
  mapMarkCore,
  mapUserInfo,
  mapUserRole
}
