pragma solidity ^0.4.4;

contract HelloWorld {

	uint balance;

	function HelloWorld() {
		balance = 777;			
	}

	function botaBalance() returns (uint) {
		return balance;
	}
	
	function deposit(uint _amount) {
		balance = balance + _amount;
	}

}
