// For More Information See the Documentation
// https://besu.hyperledger.org/en/stable/HowTo/Develop-Dapps/Truffle/
// 
// @dev <JSON-RPC-http-endpoint> with the JSON-RPC endpoint (IP address and port) of a Besu node
// @dev <account-private-key> with the private key of an Ethereum account containing Ether
// @dev to deploy to besu network: truffle migrate --network besuWallet


const PrivateKeyProvider = require("truffle-hdwallet-provider");
const privateKey = "<account-private-key>";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "<JSON-RPC-http-endpoint>");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    besuWallet: {
      provider: privateKeyProvider,
      network_id: "*"
    },
  }
};