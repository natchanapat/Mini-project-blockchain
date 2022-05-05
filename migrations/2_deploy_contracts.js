var Adoption = artifacts.require("Adoption");

module.exports = function(deployer) {
  if (network == 'development'){
    return deployer.deploy(Adoption);
  }else{
    return console.log("This Network is not development");
  }
};