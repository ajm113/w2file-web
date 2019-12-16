import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from '../components/Header';

import Landing from './Landing';
import About from './About';
import Help from './Help';
import Login from './Login';
import Signup from './Signup';

export default class App extends Component {
	render() {
		return (
      <div>
        <Header />
				<Router>
          <Landing path="/" />
          <About path="/about" />
          <Help path="/help" />
          <Signup path="/signup" />
          <Login path="/login" />
				</Router>
      </div>
		);
	}
}
