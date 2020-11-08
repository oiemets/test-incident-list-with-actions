import { actionTypes } from '@servicenow/ui-core';
import { getIncidents, deleteItemById } from './httpEffects';


const {COMPONENT_BOOTSTRAPPED} = actionTypes;

const actionHandlers = {
	[COMPONENT_BOOTSTRAPPED]: ({dispatch}) => {
		dispatch('INCIDENTS_FETCH_STARTED');	
	},

	'INCIDENTS_FETCH_STARTED': getIncidents,

	'INCIDENTS_FETCH_SUCCEEDED': ({action, updateState}) => {
			const {result} = action.payload;
			updateState({incidents: result, loader: false})
	},

	'NOW_DROPDOWN_PANEL#ITEM_CLICKED': (coeffects) => {
		const {action, state, updateState, dispatch} = coeffects;
		const {id, index} = action.payload.item;
		switch (id) {
			case 'showDetails': 
				updateState({currentItem: state.incidents[index], modal: true});
				break;
			case 'delItem':
				dispatchDeleteEvent(state.incidents[index].sys_id, dispatch);
				break;
		}
	},

	'NOW_MODAL#OPENED_SET': ({updateState}) => {
		updateState({modal: false})
	},

	'NOW_MODAL#FOOTER_ACTION_CLICKED': ({state, action, dispatch}) => {
		const {id} = action.payload.action;
		if(id === 'deleteBtn') {
			dispatchDeleteEvent(state.currentItem.sys_id, dispatch);
		}},

	'HTTP_EFFECT_ERROR': (coeffects) => {
		console.log('ERR', coeffects);
	},

	'INCIDENT_DELETE_DISPATCHED': deleteItemById,

	'INCIDENT_DELETE_SUCCEEDED': ({updateState}) => {
		updateState({modal: false});
	}
};

const dispatchDeleteEvent = (id, dispatch) => {
	dispatch('INCIDENT_DELETE_DISPATCHED', {
		sys_id: id
	});
};


export default actionHandlers;