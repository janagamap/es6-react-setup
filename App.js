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
			txt: 'this is the state txt',
		    cat: 0
		}
	}
	update(e){
		this.setState({txt: e.target.value})
	}
	render(){
		return (
		<div>
		<input type="text" 
		 onChange={this.update.bind(this)}/>
		<h1>{this.state.txt}</h1></div>
	  ) 
	}
}

ReactDOM.render(
 <App/>, document.getElementById('app')
)

export default App