var HelloWorld = artifacts.require("./HelloWorld.sol");
var MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(MyToken);
};
