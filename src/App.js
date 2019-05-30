import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import MainBody from './components/MainBody'
import ProductDescription from './components/ProductDescription';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Header />
					<Menu />
					<Cart />
					<Route exact path="/" component={MainBody} />
					<Route path="/description" component={ProductDescription} exact/>
				</React.Fragment>
			</Router>
			
			
		);
		
	}
}
export default App;
