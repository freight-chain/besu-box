# Hyperledger Besu Truffle Box

This is a boilerplate template for development on Hyperledger Besu

You can [read the official documentation here](https://besu.hyperledger.org/en/stable/HowTo/Develop-Dapps/Truffle/)

## Getting Started

1. Install Truffle Wallet

- To install the Truffle wallet:
`npm install --save truffle-hdwallet-provider@web3-one`

2. Modify the truffle-config.js file in the project directory to add the wallet provider. Replace:

`<JSON-RPC-http-endpoint>` with the JSON-RPC endpoint (IP address and port) of a Besu node
`<account-private-key>` with the private key of an Ethereum account containing Ether

3. Start a Besu Node
Start a Besu node with JSON-RPC enabled on the endpoint specified in the Truffle configuration file.

> Mac users can use homebrew to install hyperledger besu
> Add the tap, and install:
> You will need a genesis file 

`brew tap hyperledger/besu`
`brew install besu`
Run the besu executable:
`besu --help`
`besu --data-path=data --genesis-file=genesis.json --p2p-port=30303 --rpc-http-enabled --rpc-http-api=ETH,NET,ADMIN --host-whitelist="*" --rpc-http-cors-origins="all"` 

4. Deploy Contract
To deploy a contract onto the Besu network:

`truffle migrate --network besuWallet`




