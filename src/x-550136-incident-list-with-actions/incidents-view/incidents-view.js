import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';

createCustomElement('incidents-view', {
    properties: {
        loader: true,
        incidents: []
    },
    renderer: {type: snabbdom},
	view,
	styles
});