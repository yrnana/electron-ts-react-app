import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../components/Counter'

function CounterPage() {
	return (
		<div>
			<Counter />
			<Link to="/">Home</Link>
		</div>
	)
}

export default CounterPage
