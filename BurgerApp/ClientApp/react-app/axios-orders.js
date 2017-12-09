import axios from 'axios';

const instance = axios.create({
    // i'm not using firebase here, so i just leave it empty to refer to current asp.net backend server
    baseURL: ''
});

export default instance;