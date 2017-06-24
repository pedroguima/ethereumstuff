import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var contractAbi = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"}];

var contractAddress = '0x1bb50c157175b6e5cc32400c39cdddb0bb4f45ec';

var peopleContract = ETHEREUM_CLIENT.eth.contract(contractAbi).at(contractAddress)


class App extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			firstNames: [],
			lastNames: [],
			ages: []
		}

	}

	componentWillMount() {
		var people = peopleContract.getPeople()
		this.setState({
			firstNames: String(people[0]).split(','),
			lastNames: String(people[1]).split(','),
			ages: String(people[2]).split(',')
		})
	}
	

  render() {
		var TableRows = []	

		this.state.firstNames.forEach( (value, index) => {
			TableRows.push(
				<tr>
					<td>{ETHEREUM_CLIENT.toAscii(this.state.firstNames[index]).replace(/\0[\s\S]*$/g,'')}</td>
					<td>{ETHEREUM_CLIENT.toAscii(this.state.lastNames[index]).replace(/\0[\s\S]*$/g,'')}</td>
					<td>{this.state.ages[index]}</td>
				</tr>
			)	
		})

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to meh</h2>
        </div>
				<div className="App-Content">
					<table>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Age</th>
							</tr>
						</thead>
						<tbody>
						{TableRows}
						</tbody>
					</table>	
				</div>
      </div>
    );
  }
}

export default App;
