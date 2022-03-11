const { utils } = require('ethers')

// eslint-disable-next-line max-params
export const createTableData = (USDPrices, BTC, MCO2, NCT, KLIMA, sKLIMA) => {
  const MCO2formated = utils.formatUnits(MCO2, 18)
  const BTCformated = utils.formatUnits(BTC, 18)
  const NCTformated = utils.formatUnits(NCT, 18)
  const KLIMAformated = utils.formatUnits(KLIMA, 9)
  const sKLIMAformated = utils.formatUnits(sKLIMA, 9)

  const MCO2BalanceUSD = MCO2formated * USDPrices['moss-carbon-credit']?.usd || 0
  const BCTBalanceUSD = BTCformated * USDPrices['toucan-protocol-base-carbon-tonne']?.usd || 0
  const NCTBalanceUSD = NCTformated * USDPrices['toucan-protocol-nature-based-carbon-tonne']?.usd || NCTformated*1
  const KLIMABalanceUSD = KLIMAformated * USDPrices['klima-dao']?.usd || 0
  const sKLIMABalanceUSD = sKLIMAformated * USDPrices['staked-klima']?.usd || 0

  const tableData = [
    {
      key: '1',
      token: {
        title: 'Moss CO2 Token',
        icon: 'icon/moss.svg',
        url: 'https://moss.earth/',
      },
      position: `$${MCO2BalanceUSD.toFixed(2)}`,
      co2: Number(MCO2formated).toFixed(2),
      description: 'Moss Certified CO2 Token',
      contract: {
        title: '0xAa7DbD1598251f856C12f63557A4C4397c253Cea',
        url: 'https://polygonscan.com/address/0xAa7DbD1598251f856C12f63557A4C4397c253Cea',
      },
      buy: {
        title: 'Get MCO2',
        url: 'https://quickswap.exchange/#/swap?outputCurrency=0xAa7DbD1598251f856C12f63557A4C4397c253Cea&chain=polygon',
      },
    },
    {
      key: '2',
      token: {
        title: 'Toucan CO2 Tokens (BCT)',
        icon: 'icon/toucan.svg',
        url: 'https://toucan.earth/',
      },
      position: `$${BCTBalanceUSD.toFixed(2)}`,
      co2: Number(BTCformated).toFixed(2),
      description: 'Base Carbon Ton: Toucan credits bridged to blockchain on Polygon.',
      contract: {
        title: '0x2F800Db0fdb5223b3C3f354886d907A671414A7F',
        url: 'https://polygonscan.com/address/0x2F800Db0fdb5223b3C3f354886d907A671414A7F',
      },
      buy: {
        title: 'Get BCT',
        url: 'https://app.sushi.com/en/swap?outputCurrency=0x2F800Db0fdb5223b3C3f354886d907A671414A7F&chain=polygon',
      },
    },
    {
      key: '3',
      token: {
        title: 'Toucan CO2 Tokens (NCT)',
        icon: 'icon/nct.png',
        url: 'https://toucan.earth/',
      },
      position: `$${NCTBalanceUSD.toFixed(2)}`,
      co2: Number(NCTformated).toFixed(2),
      description: 'Nature Carbon Ton: Toucan premium credits bridged to blockchain on Polygon.',
      contract: {
        title: '0xd838290e877e0188a4a44700463419ed96c16107',
        url: 'https://polygonscan.com/address/0xd838290e877e0188a4a44700463419ed96c16107',
      },
      buy: {
        title: 'Get NCT',
        url: 'https://app.sushi.com/en/swap?outputCurrency=0xd838290e877e0188a4a44700463419ed96c16107&chain=polygon',
      },
    },
    {
      key: '4',
      token: {
        title: 'Klima Tokens (KLIMA)',
        icon: 'icon/klima.svg',
        url: 'https://www.klimadao.finance/',
      },
      position: `$${KLIMABalanceUSD.toFixed(2)}`,
      co2: Number(KLIMAformated).toFixed(2),
      description: 'Klima DAO Tokens, unstaked on Polygon.',
      contract: {
        title: '0x4e78011ce80ee02d2c3e649fb657e45898257815',
        url: 'https://polygonscan.com/address/0x4e78011ce80ee02d2c3e649fb657e45898257815',
      },
      buy: {
        title: 'Get KLIMA',
        url: 'https://app.sushi.com/en/swap?outputCurrency=0x4e78011ce80ee02d2c3e649fb657e45898257815&chain=polygon',
      },
    },
    {
      key: '5',
      token: {
        title: 'Staked Klima (sKLIMA)',
        icon: 'icon/klima.svg',
        url: 'https://www.klimadao.finance/',
      },
      position: `$${sKLIMABalanceUSD.toFixed(2)}`,
      co2: Number(sKLIMAformated).toFixed(2),
      description: 'Staked Klima DAO Tokens on Polygon',
      contract: {
        title: '0xb0C22d8D350C67420f06F48936654f567C73E8C8',
        url: 'https://polygonscan.com/address/0xb0C22d8D350C67420f06F48936654f567C73E8C8',
      },
      buy: {
        title: 'Stake KLIMA',
        url: 'https://dapp.klimadao.finance/#/stake',
      },
    },
  ]

  return tableData
}
