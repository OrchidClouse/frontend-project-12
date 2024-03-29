import React from 'react';
import {useFormik} from 'formik';
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';

export const LoginPage = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		onSubmit: values => {
			try{
				axios.post('/api/v1/login', { username: values.login, password: values.password }).then((response) => {
					console.log(response.data);
					dispatch(setCredentials(response.data));
					navigate('/')
				});
			}catch(error){
				console.log(error);
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

			<div>
				If u not registred <u><a href="/signup">click here</a></u>
			</div>

			<Button className={styles.submitBtn} type="submit">Submit</Button>
		</form>
	)
}
