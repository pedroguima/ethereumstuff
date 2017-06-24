pragma solidity ^0.4.4;

contract People {

	Person[] public people;

	struct Person {
		bytes32 firstName;
		bytes32 lastName;
		uint age;
	}


	function addPerson(bytes32 _firstName, bytes32 _lastName, uint _age) returns (bool success) {

		// memory - makes sure it doesn't change state yet
		Person memory p;
		p.firstName = _firstName;
		p.lastName = _lastName;
		p.age = _age;

		// this one costs gas
		people.push(p);
		return true;
	}
	 
	function getPeople() constant returns (bytes32[], bytes32[], uint[]) {

		uint length = people.length;

		bytes32[] memory firstNames = new bytes32[](length);
		bytes32[] memory lastNames = new bytes32[](length);
		uint[] memory ages = new uint[](length);
		
		for (uint i = 0; i < length; i++) {
			Person memory p;
			p = people[i];
			firstNames[i] = p.firstName;	
			lastNames[i] = p.lastName;	
			ages[i] = p.age;	
		}
		
		return (firstNames, lastNames, ages);
	
	}

}
