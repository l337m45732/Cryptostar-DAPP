/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 *   > > Using Truffle V5 or later? Make sure you install the `web3-one` version.
 *
 *   > > $ npm install truffle-hdwallet-provider@web3-one
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "bb49c0455a9e4073a831a42114879c1e";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();


  contracts_build_directory: "./client/src/contracts",

  module.exports = {
    networks: { 
      development: {
        host: '127.0.0.1',
        port: 8545,
        network_id: "*"
      }, 
      rinkeby: {
        provider: function() { 
          return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/bb49c0455a9e4073a831a42114879c1e") 
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
        networkCheckTimeout: 1000000
      }
    }
  }

