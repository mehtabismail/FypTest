const Marketplace = artifacts.require("Marketplace");
const FileUpload = artifacts.require('FileUpload');

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
};

module.exports = function(deployer) {
  deployer.deploy(FileUpload);
};

// const Patient = artifacts.require("Patient");

// module.exports = function(deployer) {
//   deployer.deploy(Patient);
// };
