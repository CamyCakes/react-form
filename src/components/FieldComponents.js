import React from 'react'

export function Text ( props ) {
	let field = props.data;
	return(
		<div>
			<label>{ field.label }
				<input 
					type={ field.type } 
					name={ field.name }
					required={ field.required }
				/>
			</label>
		</div>
	)
}

export function Checkbox ( props ){
	const checkboxes = props.data.settings.options.map( ( option, index ) => {
		return (
			<div key={ index }>
				<label name={ option.name }>
					{ option.label }
					<input 
						type={ props.data.type } 
						value={ option.value } 
					/>
				</label>
			</div>
		)
	});
	return checkboxes;
}

export function Radio ( props ){
	const radios = props.data.settings.options.map( ( option, index ) => {
		return (
			<div key={ index }>
				<label>
					{ option.label }
					<input 
						type={ props.data.type } 
						value={ option.value } 
						name={ props.data.name } 
					/>
				</label>
			</div>	
		)
	});
	return radios;
}