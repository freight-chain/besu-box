/* eslint-disable no-undef */
require("babel-register");
require("babel-polyfill");
const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKey = "<account-private-key>";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "127.0.0.1:8545");
// @dev privateKeyProvider running locally, this means your running a node on
// your computer ethsigner

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks : {
    besuWallet : {
      provider : privateKeyProvider,
      host : "<IP_ADDRESS>",
      port : 8545,
      network_id : "*",
    },
  },
  // https://www.trufflesuite.com/docs/truffle/reference/configuration#compiler-configuration
  // for different versions of solidity ^0.5 >
  compilers : {
    solc : {
      version : "0.5.16", //  solc-js
    },
  },
};
