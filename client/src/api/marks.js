import axios from 'api'

const getMarks = () => axios.get('/marks')
const postMarks = () => axios.post('/marks')
const putMarks = () => axios.put('/marks')

export default {
    getMarks,
    postMarks,
    putMarks 
}
