import React from 'react';
import AgentsModal from './AgentsModal';
import AgentsTable from './AgentsTable';
import Developer from './Developer';
import {observer} from 'mobx-react';


const developerStore = new Developer();

@observer
export default class AgentsStep extends React.Component {

	constructor(props) {
		    super(props);
		    this.isValidated = this._isValidated.bind(this);
		  }

	_isValidated() {
		this.props.handleSubmit();
		return true;
	}
	
	

	  render() {
		  
		    const metadata = this.props.metadataStore.metadata;
		    const developers = metadata.developers.slice();
		    const devsLength = developers.length;
		    return (
		    <div>
		      <AgentsTable developers={developers} developerStore={developerStore} />
		      <AgentsModal developerStore={developerStore} metadataStore={this.props.metadataStore} devsLength={devsLength} />
		    </div>
		      );
		  }
}
