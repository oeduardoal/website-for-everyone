import {
  Box,
  Container,
  Heading,
  Image,
  Text,
} from '@grupoboticario/flora-react'
import Head from 'next/head'

const Home = () => (
  <Box
    css={{
      paddingBlock: '$9',
      color: '$medium-light-1',
    }}
  >
    <Head>
      <title>Template Next.js</title>
      <meta name="description" content="Template Next.js by Grupo Boticário" />
      <link rel="icon" href="/logo.svg" />
    </Head>

    <Container centerContent size="large">
      <Image src="/logo.svg" size="100" alt="flora logotipo" />
      <Heading as="h1" level={4} css={{ marginBlock: '$3' }}>
        Template Next.js
      </Heading>
      <Text>
        Criado com Next.js e{' '}
        <Text
          as="a"
          color="$brand-1"
          href="https://github.com/grupoboticario/flora"
        >
          Flora.ds
        </Text>
      </Text>
    </Container>
  </Box>
)

export default Home
