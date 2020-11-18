import { createHttpEffect } from '@servicenow/ui-effect-http';


export const getIncidents = createHttpEffect('api/now/table/incident?sysparm_display_value=true', {
	method: 'GET',
	successActionType: 'INCIDENTS_FETCH_SUCCEEDED'
});

export const deleteItemById = createHttpEffect('api/now/table/incident/:sys_id', {
	method: 'DELETE',
	pathParams: ['sys_id'],
	successActionType: 'INCIDENT_DELETE_SUCCEEDED',
	errorActionType: 'HTTP_EFFECT_ERROR'
});