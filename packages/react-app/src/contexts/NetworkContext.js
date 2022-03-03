import React, { useCallback, useEffect, useState } from 'react'
import { useUserProviderAndSigner } from 'eth-hooks'

import { ALCHEMY_KEY, NETWORKS } from '../constants'
import { Web3ModalSetup } from '../helpers'
import { useStaticJsonRPC } from '../hooks'

const { ethers } = require('ethers')
const networkOptions = ['polygon', 'mainnet', 'rinkeby']
const USE_BURNER_WALLET = false

const providers = [
  'https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406',
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  'https://rpc.scaffoldeth.io:48544',
]
const polygonNetwork = NETWORKS.polygon
const polygonProviderUrl = polygonNetwork.rpcUrl

export const NetworkContext = React.createContext({
  connectToWallet: () => {},
  localChainId: undefined,
  selectedChainId: undefined,
  setSelectedNetwork: () => {},
  address: undefined,
  userSigner: undefined,
  mainnetProvider: undefined,
  polygonProvider: undefined,
  web3Modal: undefined,
  targetNetwork: undefined,
})

const testAddress = '0x2f28cc3f13a303da007f49d615479fe0265326c5'

export const NetworkContextProvider = ({ children }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0])
  const [injectedProvider, setInjectedProvider] = useState()
  const [isLoadingAccount, setIsLoadingAccount] = useState(true)
  const [address, setAddress] = useState()
  const web3Modal = Web3ModalSetup()

  const targetNetwork = NETWORKS[selectedNetwork]
  const localProvider = useStaticJsonRPC([targetNetwork.rpcUrl])

  const mainnetProvider = useStaticJsonRPC(providers)
  const polygonProvider = new ethers.providers.StaticJsonRpcProvider(polygonProviderUrl)
  const userSigner = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET).signer

  const localChainId = localProvider?._network?.chainId
  const selectedChainId = userSigner?.provider?._network?.chainId

  const connectToWallet = useCallback(async () => {
    setIsLoadingAccount(true)

    const provider = await web3Modal.connect()

    setInjectedProvider(new ethers.providers.Web3Provider(provider))

    provider.on('chainChanged', chainId => {
      console.log(`chain changed to ${chainId}! updating providers`)
      setInjectedProvider(new ethers.providers.Web3Provider(provider))
    })

    provider.on('accountsChanged', () => {
      console.log(`account changed!`)
      setInjectedProvider(new ethers.providers.Web3Provider(provider))
    })
    setIsLoadingAccount(false)
  }, [web3Modal])

  useEffect(() => {
    const getAddress = async () => {
      if (userSigner) {
        const newAddress = await userSigner.getAddress()

        setAddress(newAddress)
      }
    }

    getAddress()
  }, [userSigner])

  useEffect(() => {
    if (web3Modal.cachedProvider && !injectedProvider) connectToWallet()
    else setIsLoadingAccount(false)
  }, [injectedProvider, connectToWallet, web3Modal])

  const value = {
    connectToWallet,
    localChainId,
    selectedChainId,
    setSelectedNetwork,
    address,
    userSigner,
    mainnetProvider,
    polygonProvider,
    targetNetwork,
    isLoadingAccount,
  }

  return <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
}