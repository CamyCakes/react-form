import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import Form from './components/Form';
import formData from './components/form-data';

class App extends React.Component{
	render(){
		return(
			<div>
				<Form 
					action={ formData.action } 
					fields={ formData.fields } 
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));