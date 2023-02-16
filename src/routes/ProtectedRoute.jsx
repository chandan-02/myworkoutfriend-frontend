import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'


export default function ProtectedRoute(props) {
	const user = localStorage.getItem('user') ?? {name:'chandan'}
	const { component: Component, ...remProps } = props
	const [pathname] = useState(window.location.pathname + window.location.search)

	return (
		<Route
			{...remProps}
			render={remProps => (
				user ?
					<Component {...remProps} /> :
					<Redirect to='/auth' />
			)}
		/>
	);
}
