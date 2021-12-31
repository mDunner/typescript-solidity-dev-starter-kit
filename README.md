# Typescript Solidity Dev Starter Kit

_Updated to use Hardhat!_

This is a starter kit for developing, testing, and deploying smart contracts with a full Typescript environment. This stack uses [Hardhat](https://hardhat.org) as the platform layer to orchestrate all the tasks. [Ethers](https://docs.ethers.io/v5/) is used for all Ethereum interactions and testing.

[Blog Post](https://medium.com/@rahulsethuram/the-new-solidity-dev-stack-buidler-ethers-waffle-typescript-tutorial-f07917de48ae)

## Using this Project

Clone this repository, then install the dependencies with `npm install`. Build everything with `npm run build`. https://hardhat.org has excellent docs, and can be used as reference for extending this project.

### Environment Setup
 - [Create a Polyscan Account and API Key](https://polygonscan.com/myapikey)
 - [Create an Alchemy account](https://dashboard.alchemyapi.io/)
   - Create a Polygon Mumbai App within Alchemy
 - [Create an Ethernal account](https://app.tryethernal.com)
   - Create a Matic chain workspace within Ethernal
 - Create a secret, development ONLY address. 
   - Easily done by generating a new Metamask wallet and exporting the private key.
 - Fund your development address using the [Polygon Mumbai Faucet](https://faucet.polygon.technology/) (recommend funding a few matic)
 - Get the Block number of your final funding transaction from Polyscan.
 - Create a `.env` file at the root of this project and create/fill the following variables in that file:
 ```
ETHERSCAN_API_KEY=<YOUR POLYSCAN API KEY>
DEV_PRIVATE_KEY=<YOUR DEVELOPMENT ONLY WALLET ADDRESS>
ALCHEMY_KEY=<YOUR ALCHEMY API KEY (END OF THE API URL YOU SEE IN ALCHEMY)
BLOCK_PIN=<BLOCK NUMBER OF LAST FUNDING TRANSACTION>
 ```
### Helpful Docs
- https://docs.openzeppelin.com/learn/connecting-to-public-test-networks
- https://hardhat.org/hardhat-network/guides/mainnet-forking.html
- https://doc.tryethernal.com/getting-started/hardhat-project-setup
- ???

## Available Functionality

### Build Contracts and Generate Typechain Typeings

`npm run compile`

### Run Contract Tests & Get Callstacks

In one terminal run `npx hardhat node`

Then in another run `npm run test`

Notes:

- The gas usage table may be incomplete (the gas report currently needs to run with the `--network localhost` flag; see below).

### Run Contract Tests and Generate Gas Usage Report

In one terminal run `npx hardhat node`

Then in another run `npm run test -- --network localhost`

Notes:

- When running with this `localhost` option, you get a gas report but may not get good callstacks
- See [here](https://github.com/cgewecke/eth-gas-reporter#installation-and-config) for how to configure the gas usage report.

### Run Coverage Report for Tests

`npm run coverage`

Notes:

- running a coverage report currently deletes artifacts, so after each coverage run you will then need to run `npx hardhat clean` followed by `npm run build` before re-running tests
- the branch coverage is 75%

### Deploy to Ethereum

Create/modify network config in `hardhat.config.ts` and add API key and private key, then run:

`npx hardhat run --network rinkeby scripts/deploy.ts`

### Verify on Etherscan

Using the [hardhat-etherscan plugin](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html), add Etherscan API key to `hardhat.config.ts`, then run:

`npx hardhat verify --network rinkeby <DEPLOYED ADDRESS>`

PRs and feedback welcome!


