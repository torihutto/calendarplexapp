import React from 'react';

class Year extends React.Component {
	constructor(){
		super(...arguments);
		this.state={};

	}
	static get defaultProps(){
		return {};
	}
	render(){
		return <div> This is a year.</div>

	}
}
export default Year;