import { call, put, takeLatest, all } from 'redux-saga/effects'
import { loginFailure, loginSuccess, LOGIN_REQUEST } from './actions'
import * as AuthService from '../../services/auth-service'

interface LoginData {
	email: string
	password: string
	remember: boolean
}

interface LoginPayload {
	data: LoginData
	callback: (result: { success?: { accessToken: string; refreshToken: string }; error?: string }) => void
}

function* loginRequestSaga({ payload }: { payload: LoginPayload }) {
	try {
		const response = yield call(AuthService.login, payload.data)
		const { accessToken, refreshToken, user } = response.data
		yield put(loginSuccess(user))

		if (payload.callback) {
			payload.callback({ success: { accessToken, refreshToken } })
		}
	} catch (error: any) {
		const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.'
		yield put(loginFailure(errorMessage))

		if (payload.callback) {
			payload.callback({ error: errorMessage })
		}
	}
}

export default function* authSaga() {
	yield all([takeLatest(LOGIN_REQUEST, loginRequestSaga)])
}
