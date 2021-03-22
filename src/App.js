import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component{
	
	state = { advice : ''}; //global object which contains all the important items


	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () =>{   //classmethod a function that belongs to a class
		axios.get('	https://api.adviceslip.com/advice')
		.then((res)=>{
			const { advice } = res.data.slip;  // destructuring an object
			this.setState({ advice : advice}) // 2 state is populated using this command 
			console.log(advice); // 1 we now have access to the data from api but in order to dispaly it we need to change the state and popultate it
		})
		.catch((err)=>{
			console.log(err);
		})
	}

	render(){	//3 now that the state which is a golabal variable is populated we can display it on 
	const {advice} = this.state;
		return(
			<div className = 'container-sm'>
				<div className = 'card'>
					<h3>{advice}</h3>
				</div>
				<button className= 'btn btn-light' onClick={this.fetchAdvice}> 
					<span>Advice</span>	 
				</button>
			</div>	
			
			//onClick is used to call a fucntion again
		)
	}
}

export default App;