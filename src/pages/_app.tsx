import { foundationTheme } from '@grupoboticario/flora'
import { FloraProvider, globalCss } from '@grupoboticario/flora-react'
import type { AppProps } from 'next/app'

const globalStyle = globalCss({
  'html, body': {
    height: '100%',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  globalStyle()

  return (
    <FloraProvider theme={foundationTheme}>
      <Component {...pageProps} />
    </FloraProvider>
  )
}

export default App
