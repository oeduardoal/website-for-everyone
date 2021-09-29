import { foundationTheme } from '@grupoboticario/flora'
import { Box, FloraProvider, globalCss } from '@grupoboticario/flora-react'
import type { AppProps } from 'next/app'

const globalStyle = globalCss({
  'html, body, body > div:first-child, div#__next, div#__next > div': {
    height: '100%',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  globalStyle()

  return (
    <FloraProvider>
      <Box className={foundationTheme}>
        <Component {...pageProps} />
      </Box>
    </FloraProvider>
  )
}

export default App
