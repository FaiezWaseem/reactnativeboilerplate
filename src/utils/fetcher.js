import axios from "axios";

const api = axios.create({
    baseURL : 'https://gya.tec.edu.pk/api',
    withCredentials : true,
    timeout : 15000
})

export default api;