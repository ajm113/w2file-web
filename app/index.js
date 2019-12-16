import 'promise-polyfill';
import 'isomorphic-fetch';
import '@babel/polyfill';

import { h, render } from 'preact';

import 'sanitize.css/sanitize.css';
import './style/index.scss';

let root = null;
function init() {
  const App = require('./containers/app').default;
  const rootElement = document.getElementById('app');

  root = render(<App />, rootElement, root);
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./containers/app', () => requestAnimationFrame(init) );
}

init();
