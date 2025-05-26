import axios, { AxiosInstance } from 'axios'

const BASE_PATH = 'http://localhost:3001'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: BASE_PATH,
	timeout: 60000,
	withCredentials: true
})

export default axiosInstance
