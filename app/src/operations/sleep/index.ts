import { defineOperationApp } from '@directus/shared/utils';

export default defineOperationApp({
	id: 'sleep',
	icon: 'schedule',
	name: '$t:operations.sleep.name',
	description: '$t:operations.sleep.description',
	preview: (options) => ({
		test: 'Hi',
	}),
	options: [
		{
			field: 'milliseconds',
			name: '$t:operations.sleep.milliseconds',
			type: 'integer',
			meta: {
				width: 'full',
				interface: 'input',
				options: {
					min: 0,
					type: 'integer',
					placeholder: '1000'
				},
			},
		},
	],
});