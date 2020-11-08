import '@servicenow/now-loader';
import '@servicenow/now-template-card';


export default state => {
    return (
        <div className="container">
            {state.properties.loader ? <now-loader label="loading..." size="lg"/> : ''}
            {
                state.properties.incidents.map((i, ind)=> {
                    return <now-template-card-assist
                        tagline={{icon: 'tree-view-long-outline', label: 'Incident'}}
                        actions={[{id: 'showDetails', label: 'Open Record', index: ind}, {id: 'delItem', label: 'Delete', index: ind}]}
                        heading={{label: i.short_description}}
                        content={[
                            {label: 'Number', value: {type: 'string', value: i.number}},
                            {label: 'State', value: {type: 'string', value: i.state}},
                            {label: 'Assignment Group', value: {type: 'string', value: i.assignment_group.display_value}},
                            {label: 'Assigned To', value: {type: 'string', value: i.assigned_to.display_value}}
                        ]}
                        footerContent={{label: 'Updated', value: i.sys_updated_on}}
                    />
                })
            }
		</div>
    );
}