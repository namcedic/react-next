'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Checkbox, Form, Input } from 'antd'
import './style.scss'
import { loginRequest } from '@/reduxs/auth/actions'

type FormData = {
	username: string
	password: string
	remember: boolean
}

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const { loading, error } = useSelector((state: any) => state.auth)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		defaultValues: {
			username: '',
			password: '',
			remember: true
		}
	})

	const onSubmit = (data: FormData) => {
		dispatch(loginRequest(data))
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
					<Form.Item
						label='Username'
						validateStatus={errors.username ? 'error' : ''}
						help={errors.username?.message}
					>
						<Input {...register('username', { required: 'Please input your username!' })} />
					</Form.Item>

					<Form.Item
						label='Password'
						validateStatus={errors.password ? 'error' : ''}
						help={errors.password?.message}
					>
						<Input.Password {...register('password', { required: 'Please input your password!' })} />
					</Form.Item>

					<Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
						<Checkbox {...register('remember')}>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type='primary' htmlType='submit' loading={loading}>
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
