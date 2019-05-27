import React, { Component } from 'react';
import Header from './components/Header';
import MenuToggle from './components/MenuToggle';
import MainBody from './components/MainBody'
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<MenuToggle />
				<MainBody /> 
			</React.Fragment>
				
				
		);
	}
}
export default App;
