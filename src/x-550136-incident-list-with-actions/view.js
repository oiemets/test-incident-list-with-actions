import './modal-window';
import './incidents-view';


export default state => {
	return (
		<div>
			<modal-window modal={state.modal} currentItem={state.currentItem}/>
			<incidents-view sortedBy={state.sortedBy} loader={state.loader} incidents={state.incidents}/>
		</div>
		
	);
};