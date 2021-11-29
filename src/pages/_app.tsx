import { foundationTheme } from '@grupoboticario/flora'
import { FloraProvider, globalCss } from '@grupoboticario/flora-react'
import type { AppProps } from 'next/app'

import { AccessibilityControl } from '~/hooks/AccessibilityControl'

const fonts = [
  {
    fontFamily: 'opendyslexic',
    src: 'url("/fonts/OpenDyslexic-Regular.otf")',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  {
    fontFamily: 'opendyslexic',
    src: 'url("/fonts/OpenDyslexic-Italic.ttf")',
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  {
    fontFamily: 'opendyslexic',
    src: 'url("/fonts/OpenDyslexic-Bold.ttf")',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  {
    fontFamily: 'opendyslexic',
    src: 'url("/fonts/OpenDyslexic-BoldItalic.ttf")',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
]

const globalStyle = globalCss({
  'html, body': {
    height: '100%',
  },
  '@font-face': fonts,
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
