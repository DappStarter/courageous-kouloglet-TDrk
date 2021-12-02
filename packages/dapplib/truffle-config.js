require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant hidden knife force task'; 
let testAccounts = [
"0x6179950b10ef102a63ac821a4f05cf554c9dfa1c2fb9361d7378a8d06149c0d3",
"0xa19ff80be68bc4d181340a13b1878e91ae3fbada6d4d4d0532e3b24b327271c0",
"0xd004a37074dd43325fdf56f786eecad0457446b27981e9af8af2ba16220befef",
"0x46e84350bed67bde137eb831eacd2f2744d185cfd325456b39ce4470805fb2e1",
"0xafd6129f3c036fc520f998b856d523ae787b9dbf2001078b9589ba47932f1de3",
"0xb280d61d6ace80cb6177dcbdf24443973b0eeae93ce4ccea52cfdaa49fa69caf",
"0xf398409c6fdae6b93ee925eadacfee9d83e4b766a389c8c1cc90821dff79fdf3",
"0x571ae23f29a6fb8d66bbd4f3d1e2b0b9e51358704d97f318b7e016e55b83b12b",
"0x2ccb8bf21071ae8854bd8907975b5870947ca8d71f936f59fa790dc26a064e07",
"0x195abc0ec9acf7142aa1e1c9c97c11718b2e70b98bd9316a49261140028b5ae6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

