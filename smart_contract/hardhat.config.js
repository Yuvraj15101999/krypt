require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");



//https://eth-goerli.g.alchemy.com/v2/rsqpNmYagW-6tesP1gg0S_rkmnTdrBER

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/rsqpNmYagW-6tesP1gg0S_rkmnTdrBER',
      accounts:['6ffbbe97a0146c14e4cc8312c72090869358e2b33241dae720c5afc2bd4e36af']
    }
  }
};
