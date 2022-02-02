// eslint-disable-next-line no-undef
// const Marketplace = artifacts.require("Marketplace");
// eslint-disable-next-line no-undef
const FileUpload = artifacts.require('../src/contracts/FileUpload.sol');

// eslint-disable-next-line no-undef
// const SolidityDrive = artifacts.require("SolidityDrive");

// module.exports = function(deployer) {
//   deployer.deploy(Marketplace);
// };

module.exports = function(deployer) {
  deployer.deploy(FileUpload);
};

// module.exports = function(deployer) {
//   deployer.deploy(SolidityDrive);
// };

// const Patient = artifacts.require("Patient");

// module.exports = function(deployer) {
//   deployer.deploy(Patient);
// };
