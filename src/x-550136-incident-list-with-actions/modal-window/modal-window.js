import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';

createCustomElement('modal-window', {
    properties: {
        modal: false,
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
			}}
    },
    renderer: {type: snabbdom},
	view,
	styles
});