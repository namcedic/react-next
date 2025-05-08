import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions'

interface LoginData {
	username: string
	password: string
	remember: boolean
}

function* loginRequest(action: { type: string; payload: LoginData }) {
	try {
		const response = yield call(axios.post, '/api/login', {
			username: action.payload.username,
			password: action.payload.password
		})

		// If remember is true, store token in localStorage
		if (action.payload.remember) {
			localStorage.setItem('token', response.data.token)
		}

		yield put(loginSuccess(response.data.user))
	} catch (error: any) {
		const errorMessage = error.response?.data?.message || 'Login failed'
		yield put(loginFailure(errorMessage))
	}
}

export default function* authSaga() {
	yield takeLatest(LOGIN_REQUEST, loginRequest)
}
