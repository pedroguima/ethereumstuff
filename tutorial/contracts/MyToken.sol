pragma solidity ^0.4.4;

contract MyToken {
	
	mapping (address => uint) balances;
	address public owner;

	function MyToken() {
		owner = msg.sender;
		balances[owner] = 1000;
	}

	// MyToken.deployed().then(function (instance) { instance.transfer(account2, 900).then(console.log) })
	function transfer(address _to, uint amount) returns (bool success){
		
		if (balances[msg.sender] >= amount) {
			balances[msg.sender]-=amount;
			balances[_to]+=amount;
			return true;
		} else {
			return false;
		}	

	}

	// MyToken.deployed().then(function (instance) { instance.botaBalance(account1).then(console.log) })
	// constant is basically to say it won't cost gas to run it
	function botaBalance(address _user) constant returns (uint _balance) {
		return balances[_user];
	}

}
