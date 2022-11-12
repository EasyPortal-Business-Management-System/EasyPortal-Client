import axios from 'axios';

console.log('environment: ', process.env.REACT_APP_API_ENDPOINT);

export default axios.create({
	baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000/',
	timeout: 5000,
	withCredentials: true,
});