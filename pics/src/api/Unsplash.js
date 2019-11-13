import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 87b0b67242210ee4f7e83added6bee049f49c915221a05f1640eeffb04a61fa4' }
})