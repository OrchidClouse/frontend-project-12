import React from 'react';
import {useFormik} from 'formik';
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
			repeatPassword: '',
		},
		onSubmit: values => {
			if(values.password === values.repeatPassword){
				axios.post('/api/v1/signup', { username: values.login, password: values.password }).then((response) => {
					console.log(response.data);
					localStorage.setItem('token', response.data.token);
					navigate('/');
				})
			}else{
				console.error('Not same passwords');
			}

		},
	});

	return (
		<form className={styles.formContainer} onSubmit={formik.handleSubmit}>
			<label htmlFor="login">Login</label>
			<input
				id="login"
				name="login"
				type="login"
				onChange={formik.handleChange}
				value={formik.values.login}
			/>

			<label htmlFor="password">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				onChange={formik.handleChange}
				value={formik.values.password}
			/>

			<label htmlFor="repeatPassword">Password</label>
			<input
				id="repeatPassword"
				name="repeatPassword"
				type="password"
				onChange={formik.handleChange}
				value={formik.values.repeatPassword}
			/>

			<button className={styles.submitBtn} type="submit">Submit</button>
		</form>
	)
}
