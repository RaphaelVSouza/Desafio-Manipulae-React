import axios from 'axios';

const corsProxy = axios.create({
    baseURL: 'https://cors-anywhere-raphael.herokuapp.com'
})

export default corsProxy;