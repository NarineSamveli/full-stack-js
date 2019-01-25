import axios from 'api'

const getStudents = () => axios.get('/students')

export default {
  getStudents
}
