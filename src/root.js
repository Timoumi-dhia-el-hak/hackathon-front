import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import theme from './config/theme';

function BasicExample (){
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Container maxWidth="lg">
					<Header />
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={About} />
					<Route path="/topics" component={Topics} />
					<Footer />
				</Container>
			</Router>
		</ThemeProvider>
	);
}

function About (){
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Topics ({ match }){
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Route path={`${match.path}/:topicId`} component={Topic} />
			<Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
		</div>
	);
}

function Topic ({ match }){
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	);
}

export default BasicExample;
