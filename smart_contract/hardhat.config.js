// https://eth-ropsten.alchemyapi.io/v2/5nEJNngVanO6MsgYyDiPoIXCaLRtgAKc

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:  '0.8.0',
  networks : {
    ropsten : {
      url: 'https://eth-ropsten.alchemyapi.io/v2/5nEJNngVanO6MsgYyDiPoIXCaLRtgAKc',
      accounts: ['ff6b9c37353487a4121e909b9b9ff9e4a4b99ac1f78945bcf1a4e64f872d5be4'],
    }
  }
}