import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-dropdown';
import '@servicenow/now-icon';
import styles from './styles.scss';

const view = () => {
    return (
        <div className='nav'>
            <now-dropdown 
                placeholder='FILTER BY' 
                icon='filter-fill'
                size='md'
                select='single'
                bare
                panelFitProps={{}}
                items={[
                        {id: 'number', label: 'NUMBER', },
                        {id: 'state', label: 'STATE', },
                        {id: 'opened_at', label: 'OPENED AT', },
                        {id: 'short_description', label: 'DESCRIPTION', },
                        {id: 'assignment_group.display_value', label: 'ASSIGNMENT GROUP', },
                        {id: 'assigned_to.display_value', label: 'ASSIGNED TO', }
                    
                    ]}/>
        </div>
    );
}

createCustomElement('filter-view', {
    renderer: {type: snabbdom},
    view,
    styles
});

