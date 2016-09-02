import React from 'react';
import ReactDOM from 'react-dom';
/* Lesson 1
class App extends React.Component {
	render(){
		return <div> Hi </div>
	}
}
*/


/* Intro  Regular Class Component can have state*/
/*
class App extends React.Component {
	render(){
		return <h1>Hello World</h1>
	}
}
*/

/*Intro Alternate Syntax. This will not have state.*/
/*
const App = () => <h1>Hello Eggheads</h1>
*/

//Render
/*
class App extends React.Component {
	render(){
		return(
              <div>
                <h1>Hello World</h1>
                <b>Bold</b>
              </div>
				
			)    

		//<h1>Hello World</h1> //<b>Bold</b> Wont work with Wrap in single node
	}
}
*/

/*Properties*/
/*
class App extends React.Component {
	render(){
		let txt = this.props.txt
		return <h1>{txt}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default text'
}

ReactDOM.render(
	<App cat={5}  />,
	document.getElementById('app')
);
*/

/*State needs to be managed by Component itself*/
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			red: 0,
		    green: 0,
		    blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	render(){
		return (
		<div>
			
			<Slider ref="red" update = {this.update}/>
			{this.state.red}
			<br/>
			<Slider ref="green" update = {this.update}/>
			{this.state.green}
			<br/>
			<Slider ref="blue" update = {this.update}/>
			{this.state.blue}
			<br/>
		</div>
	  ) 
	}
}

class Slider extends React.Component {
	render(){
		return (
			<input type="range"
			min = "0"
			max = "255"
			onChange = {this.props.update}/>
		);
	}
}

ReactDOM.render(
 <App/>, document.getElementById('app')
)

export default App


/*
const Widget = (props) => {
	return (
		<div>
		<input type="text" 
		 onChange={props.update}/>
		<h1>{props.txt}</h1></div>
	  ) 
}
*/