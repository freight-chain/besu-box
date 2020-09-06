#!/bin/bash
# scaffold script for truffle besu box dapp
# Apache-2.0
#

hash node 2>/dev/null || {
  echo >&2 "Nodejs not found"
  echo >&2 "Please install nodejs lts and restart"
  exit 1
}

hash truffle 2>/dev/null || {
  echo >&2 "Please Install @truffle (nodejs package)"
  exit 1
}

# Throw away private key
# 0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3

npm install

# compile the contracts
truffle compile
truffle migrate --network besuNetwork
truffle test --network besuNetwork

echo -ne "Truffle Compiling Successful..."
docker build . -t besu-sample-network_pet_shop
echo -ne "==> Connecting now.."
docker run -p 3001:3001 --name besuNetworkDapp --detach besuNetworkDapp
