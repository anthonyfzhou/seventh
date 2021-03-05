import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["where in the world is roshan?",
				"damn how would we know that, if only there were somewhere he posted his most recent outing location",
				"if we could just get the name of the very SPECIAL PLACE seen here, that could just be our answer!",
				"(note: remember you must use a one-time pad to encrypt the answer of this stage using the answer of the previous stage as the encryption key)"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 4,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	renderContent() {
		if (this.state.index >= 0) {
			return <div className="content">
					     <img id="rosh" src={require('./thisnameisnotahint.png').default} />
					   </div>;
		}
		return null;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;

