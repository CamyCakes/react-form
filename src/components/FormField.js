import React, { useState, useEffect } from 'react'
import { Checkbox, Radio, Text } from './FieldComponents'

export default function FormField( props ){

	const field = props.data;

	switch( field.type ) {
		case 'checkbox': return ( <Checkbox data={ field } /> );
		case 'radio': 	 return ( <Radio data={ field } /> );
		default: 	 	 return( <Text data={ field } /> ); 
	}


}