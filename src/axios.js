import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://harshadaportfolio.firebaseio.com/'
});

export default instance;