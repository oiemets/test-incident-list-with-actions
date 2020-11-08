import '@servicenow/now-modal';



export default state => {
    return (
		<now-modal 
			opened={state.properties.modal} 
			size='lg' contentFullWidth 
			footerActions={[{id:'deleteBtn', label: 'Delete', variant: 'primary-negative', size: 'md'}]}>
            <div className='modal_container'>
				{mapDetails(state.properties.currentItem)}
			</div>
        </now-modal>
    );
}


const mapDetails = (obj) => {
    const headings = ['Number', 'State', 'Opened At', 'Short Description', 'Assignment Group', 'Assigned To'];
    const values = ['number', 'state', 'sys_updated_on', 'short_description', 'assignment_group', 'assigned_to'];
	return  headings.map((i, ind) => {
        return <ul><h3>{i}</h3><li>{(values[ind] === 'assignment_group' || values[ind] === 'assigned_to') ? obj[values[ind]]['display_value'] : obj[values[ind]] }</li></ul>	
	});
};