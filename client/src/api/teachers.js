import axios from 'api'

const getTeachers = () => axios.get('/teachers')

export default {
  getTeachers
}
