export default {
	action: 'this.com',
	fields: [
		{
			type: 'text',
			name: 'first-name',
			label: 'First Name',
			required: true
		},{
			type: 'text',
			name: 'last-name',
			label: 'Last Name',
			required: true
		},{
			type: 'checkbox',
			required: false,
			settings: {
				options: [
					{
						name: 'thing-1',
						label: 'Thing 1',
						value: 'thing-1'
					},{
						name: 'thing-2',
						label: 'Thing 2',
						value: 'thing-2'
					},{
						name: 'thing-3',
						label: 'Thing 3',
						value: 'thing-3'
					}
				]
			}			
		}, {
			type: 'radio',
			required: false,
			name: 'radio-1',
			settings: {
				options: [
					{
						label: 'Thing 1',
						value: 'thing-1'
					},{
						label: 'Thing 2',
						value: 'thing-2'
					},{
						label: 'Thing 3',
						value: 'thing-3'
					}
				]
			}			
		}
	] 
}