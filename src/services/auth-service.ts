import axios from '../utils/axiosInstance'

interface LoginBody {
	email: string
	password: string
	remember: boolean
}

export const login = async (body: LoginBody) => {
	try {
		const response = await axios.post('/auth/login', body)
		// Expects { data: { accessToken, refreshToken, user } }
		return response
	} catch (error: any) {
		throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.')
	}
}

export const logout = async () => await axios.post('/auth/logout')

export const register = async (body: any, query: Record<string, string>) =>
	await axios.post(`/auth/register?${new URLSearchParams(query).toString()}`, body)

export const session = async () => await axios.get('/session')

export const forgot = async (body: any) => await axios.post('/password/forgot', body)

export const reset = async (body: any) => await axios.post('/password/reset', body)

export const forgotPassword = async (body: any) => {
	try {
		let endpoint = '/password/forgot'
		if (body.step === 'reset_password') {
			endpoint = '/password/reset'
		}
		const data = await axios.post(endpoint, body)
		return data
	} catch (error) {
		throw error
	}
}
