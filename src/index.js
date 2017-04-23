import React from 'react'
import { Home, Page } from './views'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Body } from './components'
import { render } from './utils'

const Routes = () => (
	<Router>
		<div>
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/page" component={Page} />
		</div>
	</Router>
)

render(() => <Routes />)
