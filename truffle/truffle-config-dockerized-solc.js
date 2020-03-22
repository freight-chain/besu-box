module.exports = {
  compilers: {
      solc: {
      version: <string>, // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      docker: <boolean>, // Use a version obtained through docker
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: <boolean>,
          runs: <number>   // Optimize for how many times you intend to run the code
        },
        evmVersion: <string> // Default: "petersburg"
      }
    external: {
      command: "./compile-contracts",
      targets: [{
        path: "./path/to/artifacts/*.json"
      }]
    }
  }
}