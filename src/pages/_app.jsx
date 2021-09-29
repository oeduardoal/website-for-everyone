import { foundationTheme } from '@grupoboticario/flora'
import {
  Box,
  FloraProvider,
  global as GlobalStyle,
} from '@grupoboticario/flora-react'

const globalStyle = GlobalStyle({
  'html, body, body > div:first-child, div#__next, div#__next > div': {
    height: '100%',
  },
})

const App = ({ Component, pageProps }) => {
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
