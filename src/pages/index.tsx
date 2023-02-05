import { NextPage } from 'next'
import { Box, HStack, Heading, Stack, Text, Button, Link } from '@chakra-ui/react'
import { useState } from 'react'

const Home: NextPage = () => {
	
	const logo = `fil.swap`
	const [connectedAccount, setConnectedAccount] = useState('')

	return(
		<Box h={'100vh'} bgColor={'black'} w={'full'} fontFamily={'mono'}>
			<HStack px={[4,8,12]} py={[4,8]} align={'baseline'} justify={'space-between'}>
				<Heading color={'green.500'} fontFamily={'mono'}>{logo}</Heading>
				<HStack spacing={8} color={'green.200'}>
					<Link>Swap</Link>
					<Link>Liquidity</Link>
					{
						connectedAccount ? 
						<Text>{connectedAccount}</Text> :
						<Button bgColor={'green.600'} color={'green.50'}>Connect Wallet</Button>
					}
				</HStack>
			</HStack>
		</Box>
	)
}

export default Home