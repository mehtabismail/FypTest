const Marketplace = artifacts.require("Marketplace");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
};


// const Patient = artifacts.require("Patient");

// module.exports = function(deployer) {
//   deployer.deploy(Patient);
// };
