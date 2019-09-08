import React, { useState, useEffect } from 'react'
import FormField from './FormField.js'

function Form ( props ) {

	const fields = props.fields.map( ( field, index ) => {
			return (
				<FormField key={ index } data={ field } />
			)
	});

	return(
		<div className='basic-react-form'>
			<form action = { props.action }>
				<div className='basic-react-form-fields'>
					{ fields }
				</div>
			</form>
		</div>
	)
}

export default Form