import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-links-1df04.firebaseio.com/v2/',
})

export default instance
