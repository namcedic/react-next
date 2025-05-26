'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import './style.scss'
import { loginRequest } from '@/reduxs/auth/actions'

type FormData = {
	email: string
	password: string
	remember: boolean
}

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const { loading, error } = useSelector((state: any) => state.auth)

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		defaultValues: {
			email: '',
			password: '',
			remember: true
		}
	})

	const onSubmit = (data: FormData) => {
		dispatch(
			loginRequest({
				data,
				callback: (result: { success?: { accessToken: string; refreshToken: string }; error?: string }) => {
					debugger
					if (result.success && data.remember) {
						localStorage.setItem('login-user', JSON.stringify(result.success))
						notification.success({ message: 'Login successful!' })
					} else if (result.error) {
						notification.error({ message: result.error })
					}
				}
			})
		)
	}

	return (
		<div className='login-page'>
			<div className='login-form'>
				<Form
					name='basic'
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					onFinish={handleSubmit(onSubmit)}
					autoComplete='off'
				>
					<Form.Item label='Email' validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
						<Controller
							control={control}
							name='email'
							rules={{
								required: 'Please input your email!',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Please enter a valid email!'
								}
							}}
							render={({ field }) => <Input {...field} />}
						/>
					</Form.Item>

					<Form.Item
						label='Password'
						validateStatus={errors.password ? 'error' : ''}
						help={errors.password?.message}
					>
						<Controller
							control={control}
							name='password'
							rules={{ required: 'Please input your password!' }}
							render={({ field }) => <Input.Password {...field} />}
						/>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Controller
							control={control}
							name='remember'
							render={({ field }) => (
								<Checkbox {...field} checked={field.value}>
									Remember me
								</Checkbox>
							)}
						/>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type='primary' htmlType='submit' loading={loading} disabled={loading}>
							Submit
						</Button>
					</Form.Item>

					{error && (
						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
							<div style={{ color: 'red' }}>{error}</div>
						</Form.Item>
					)}
				</Form>
			</div>
		</div>
	)
}

export default Login
