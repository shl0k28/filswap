import { NextPage } from 'next'
import { Box, HStack, Heading, Stack, Text, Button } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Home: NextPage = () => {
	const logo = `fil.swap`
	
	return(
		<Box h={'100vh'} bgColor={'gray.900'} w={'full'}>
			<HStack px={[4,8,12]} py={[4,8]} align={'center'} justify={'space-between'}>
				<Heading color={'gray.100'} fontFamily={'mono'}>{logo}</Heading>
				<ConnectButton />
			</HStack>
		</Box>
	)
}

export default Home