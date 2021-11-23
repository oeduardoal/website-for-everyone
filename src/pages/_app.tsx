import { foundationTheme } from '@grupoboticario/flora'
import { FloraProvider, globalCss } from '@grupoboticario/flora-react'
import type { AppProps } from 'next/app'

import { AccessibilityControl } from '~/hooks/AccessibilityControl'

const globalStyle = globalCss({
  'html, body': {
    height: '100%',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  globalStyle()

  return (
    <FloraProvider theme={foundationTheme}>
      <AccessibilityControl>
        <Component {...pageProps} />
      </AccessibilityControl>
    </FloraProvider>
  )
}

export default App
