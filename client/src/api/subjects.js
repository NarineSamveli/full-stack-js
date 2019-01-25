import axios from 'api'

const getSubjects = () => axios.get('/subjects')

export default {
    getSubjects
}
