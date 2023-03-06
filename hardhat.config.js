require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config;
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;//YOUR GOERLI PRIVATE KEY
const TBNB_PRIVATE_KEY = process.env.TBNB_PRIVATE_KEY;//YOUR GOERLI PRIVATE KEY

module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  etherscan: {
    apiKey: {
      goerli: GOERLI_API_KEY,
      bscTestnet: TBNB_API_KEY,
    }
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
      gasLimit: 3000000
    },
    bnbtestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [TBNB_PRIVATE_KEY],
      gasLimit: 3000000,
      chainId: 97
    },
  },
};
