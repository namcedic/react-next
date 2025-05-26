import { handleActions } from 'redux-actions'
import { loginRequest, loginSuccess, loginFailure, logoutRequest, logoutSuccess } from './actions'

// Định nghĩa initialState với kiểu an toàn hơn nếu cần
export const initialState = {
	user: null,
	authenticated: false,
	loading: false,
	error: null,
	status: null
}

const reducer = handleActions(
	{
		[loginRequest]: (state) => ({
			...state,
			loading: true,
			error: null,
			status: null
		}),
		[loginSuccess]: (state, { payload }) => ({
			...state,
			authenticated: true,
			loading: false,
			user: payload,
			error: null,
			status: 'success'
		}),
		[loginFailure]: (state, { payload }) => ({
			...state,
			authenticated: false,
			loading: false,
			error: payload,
			status: 'error'
		}),
		[logoutRequest]: (state) => ({
			...state,
			loading: true
		}),
		[logoutSuccess]: (state) => ({
			...state,
			user: null,
			authenticated: false,
			loading: false,
			error: null,
			status: null
		})
	},
	initialState
)

export default reducer
