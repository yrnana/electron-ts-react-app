import React from 'react'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/counter">
					<Counter />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
