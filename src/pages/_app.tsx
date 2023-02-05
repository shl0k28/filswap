import { ChakraProvider } from '@chakra-ui/react'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import { FC } from 'react'
// import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi'
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

// const filecoinTestnet: Chain = {
// 	id: 23,
// 	rpcUrls: {
// 		default: {
// 			http: ['https://api.hyperspace.node.glif.io/rpc/v0']
// 		},
// 		public: {
// 			http: ['https://api.hyperspace.node.glif.io/rpc/v0']
// 		}
// 	},
// 	name: 'Filecoin Testnet - Hyperspace',
// 	nativeCurrency: {
// 		decimals: 18,
// 		name: 'Hyp Fil',
// 		symbol: 'tFIL'
// 	},
// 	network: 'filecoin',
// 	testnet: true
// }

// const { provider, chains } = configureChains(
// 	[filecoinTestnet],
// 	[
// 	  jsonRpcProvider({
// 		rpc: chain => ({ http: chain.rpcUrls.default.http[0] }),
// 	  }),
// 	]
// )

// const { connectors } = getDefaultWallets({
// 	appName: 'My RainbowKit App',
// 	chains,
// })
  
// const wagmiClient = createClient({
// 	autoConnect: true,
// 	connectors,
// 	provider,
// })

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return(
		<ChakraProvider>
			{/* <WagmiConfig client={wagmiClient}> */}
				{/* <RainbowKitProvider chains={chains}> */}
					<Component {...pageProps}/>
				{/* </RainbowKitProvider> */}
			{/* </WagmiConfig> */}
		</ChakraProvider>
	)
}

export default App