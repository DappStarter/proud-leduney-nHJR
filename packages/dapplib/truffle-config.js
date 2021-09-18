require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strategy crawl mushroom punch grace sister army gesture'; 
let testAccounts = [
"0x9e31c97acab176f7cf4dc1c03bb6ed3461d7b57960a5c27c5ee8d11bf051cec0",
"0x9ff7001cc11b330315d62ee84645b72196eaf765c6dc31cc63190003fa1b4262",
"0x0af97c802b41959021188ac4af8f53f7b8bd3acd3f8ccb7735892931e2ad222b",
"0x2919418f051187ee8a0719b490d96d1689cffd8d1456fe2002d13d0b16739b40",
"0xfd73199e34102c1c4dcac8e787265dfd83b2a8dfa26580f76d4bd0f6dbd5c663",
"0x332cbcb1fcf4b1fd08478003abffbcebf84bb4d37d64d139ec073dac9603a30d",
"0x5bbf236f6f2cdb8c6e1b95888121baddc9af6fb731ffc7258f6a4e24382bcba9",
"0xa10f162103b2706e68a8b5af9eec78df8861db56fb8821961c17a859cf673c79",
"0x8a1a7b0d7b1cd7ce3de96dd1fecf038ae8adf0413ec47bab3b0473cbf01f5d46",
"0x2d0029e8eeb8a4d03175e4acaf7ed3b28878b68f1433e02725238c99a9d205d3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

