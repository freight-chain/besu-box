require('babel-register')
require('babel-polyfill')
const PrivateKeyProvider = require("truffle-hdwallet-provider");
const privateKey = "<account-private-key>";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "127.0.0.1:8545");
// @dev privateKeyProvider running locally, this means your running a node on your computer ethsigner
// @user 13.57.207.168 is RPC endpoint for Freight Trust Network
// @
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    besuWallet: {
      provider: privateKeyProvider,
      host: '13.57.207.168',
      port: 3435,
      network_id: "*"
    },
  },
// https://www.trufflesuite.com/docs/truffle/reference/configuration#compiler-configuration for different versions of solidity ^0.5 > 
  compilers: {
    solc: {
      version: '0.4.19'    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
