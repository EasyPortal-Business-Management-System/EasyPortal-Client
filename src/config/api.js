import axios from 'axios';

// Define an API

const easyportalAPI = axios.create({
    baseURL: 'http://localhost:55000/'
})

easyportalAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;

})

export default easyportalAPI;


