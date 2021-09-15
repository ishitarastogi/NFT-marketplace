// migrations/2_deploy.js
const ERC20Token = artifacts.require('./ERC20Token');
const ERC721Token = artifacts.require('ERC721Token');


module.exports = async function (deployer) {
    await deployer.deploy(ERC20Token,  '10000000000000000000000');;
    await deployer.deploy(ERC721Token);
  };
  