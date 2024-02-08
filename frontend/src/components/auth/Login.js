import React from 'react';
import {useFormik} from 'formik';
import styles from "./Login.module.css";

export const LoginPage = () => {

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
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

			<button className={styles.submitBtn} type="submit">Submit</button>
		</form>
	)
}
