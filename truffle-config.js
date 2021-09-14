require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')




module.exports = {
  networks: {
   
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: '4',
      networkCheckTimeout: 1000000,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.8.4',
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  plugins: [
    'truffle-plugin-verify'
  ]

}