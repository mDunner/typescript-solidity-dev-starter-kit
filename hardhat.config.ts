import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import 'hardhat-ethernal'
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

const ALCHEMY_KEY = process.env.ALCHEMY_KEY || "";
const DEV_PRIVATE_KEY =
  process.env.DEV_PRIVATE_KEY! ||
  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PINNED_BLOCK = process.env.BLOCK_PIN

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.3", settings: {} }],
  },
  networks: {
    hardhat: {forking: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/" + ALCHEMY_KEY,
      blockNumber: Number(PINNED_BLOCK)
    }
  },
    localhost: {url: 'http://127.0.0.1:8545/', accounts: [DEV_PRIVATE_KEY]},
  //  rinkeby: {
   //   url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
   //   accounts: [RINKEBY_PRIVATE_KEY],
   // },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [DEV_PRIVATE_KEY]
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
