import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actionHandlers from './Actions';
import view from './view';

createCustomElement('x-550136-incident-list-with-actions', {
	initialState: {
		loader: true,
		incidents: [],
		currentItem: {
			number: '',
			state: '',
			sys_updated_on: '',
			short_description: '',
			assignment_group: {
				display_value: ''
			},
			assigned_to: {
				display_value: ''
			}
		},
		modal: false,
	},
	actionHandlers: {
		...actionHandlers
	},
	renderer: {type: snabbdom},
	view,
});