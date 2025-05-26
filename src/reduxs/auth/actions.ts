import { createAction } from 'redux-actions'

// Định nghĩa các action type
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// Action creators
export const loginRequest = createAction(
	LOGIN_REQUEST,
	(payload: {
		data: { email: string; password: string; remember: boolean }
		callback: (result: { success?: { accessToken: string; refreshToken: string }; error?: string }) => void
	}) => payload
)

export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFailure = createAction(LOGIN_FAILURE)
export const logoutRequest = createAction(LOGOUT_REQUEST)
export const logoutSuccess = createAction(LOGOUT_SUCCESS)
