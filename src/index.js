import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import './global.css';

require('dotenv').config();

ReactDom.render(
	<ResultContextProvider>
		<Router>
			<App />
		</Router>
	</ResultContextProvider>,
	document.getElementById('root')
);
