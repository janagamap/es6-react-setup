import React from 'react';

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

export default App