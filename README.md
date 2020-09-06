# Hyperledger Besu Truffle Box

<img src="assets/box-img-lg.png" align="right" width="325">

<br />

<br> 
This is a boilerplate template for development on Hyperledger Besu

> 🔗 [npm package available @ truffle-hyperledger-besu-box](https://www.npmjs.com/package/truffle-hyperledger-besu-box)

You can [read the official documentation here](https://besu.hyperledger.org/en/stable/HowTo/Develop-Dapps/Truffle/)

## Overview

Run a local devnet or connect to a test network

### Quickstart

`. ./init-besu.sh`

## Getting Started

1.  Install

        Install the NPM Package:
        `npm install truffle-hyperledger-besu-box`

2.  Modify the truffle-config.js file in the project directory to add the wallet provider. Replace:

        `<JSON-RPC-http-endpoint>` with the JSON-RPC endpoint (IP address and port) of a Besu node
        `<account-private-key>` with the private key of an Ethereum account containing Ether

3.  Start a Besu Node
    Start a Besu node with JSON-RPC enabled on the endpoint specified in the Truffle configuration file.

> Mac users can use homebrew to install hyperledger besu <br>
> Add the tap, and install: <br>
> You will need a genesis file as well

<br>
`brew tap hyperledger/besu`<br>
`brew install besu` <br>

4. Run the besu executable:<br>
   `besu --help`<br>
   `besu --data-path=data --genesis-file=genesis.json --p2p-port=30303 --rpc-http-enabled --rpc-http-api=ETH,NET,ADMIN --host-whitelist="*" --rpc-http-cors-origins="all"`
   <br>

5. Deploy Contract
   To deploy a contract onto the Besu network:
   <br>
   `truffle migrate --network besuWallet`

<br>

## License

MIT / Apache-2.0
