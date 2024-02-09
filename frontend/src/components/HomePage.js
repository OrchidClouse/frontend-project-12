import React from 'react'
import { useSelector } from 'react-redux'


export const HomePage = () => {
	const {token} = useSelector(state => state.auth);
	console.log(token)


	return (
		<div>HomePage</div>
	)
}
