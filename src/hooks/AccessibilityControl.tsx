import { css } from '@grupoboticario/flora-react'
import React from 'react'

type AccessibilityControlProps = {
  increaseFont: boolean
  boldTexts: boolean
  dyslexia: boolean
  contrast: boolean
  monochromatic: boolean
  virtualInterpret: boolean
}

type AccessibilityControlContextType = {
  options: AccessibilityControlProps
  toggleOption: (option: keyof AccessibilityControlProps) => void
}

const AccessibilityControlContext =
  React.createContext<AccessibilityControlContextType>(
    {} as AccessibilityControlContextType,
  )

const useAccessibilityControl = () =>
  React.useContext(AccessibilityControlContext)

const accessibleStyles = css({
  variants: {
    increaseFont: {
      true: {
        'p, a, span, label, button, input, textarea': {
          fontSize: '1.2rem !important',
          lineHeight: '1.3 !important',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontSize: '50px !important',
          lineHeight: '1.3 !important',
        },
      },
    },
    boldTexts: {
      true: {
        fontWeight: 'bold',
      },
    },
    dyslexia: {
      true: {
        '*': {
          fontFamily: 'opendyslexic !important',
        },
      },
    },
    contrast: {
      true: {
        filter: 'contrast(200%)',
      },
    },
    monochromatic: {
      true: {
        filter: 'grayscale(100%)',
      },
    },
    virtualInterpret: { true: {} },
  },
})

const AccessibilityControl = ({ children }: { children: React.ReactNode }) => {
  const [options, setOptions] = React.useState<AccessibilityControlProps>({
    increaseFont: false,
    boldTexts: false,
    dyslexia: false,
    contrast: false,
    monochromatic: false,
    virtualInterpret: false,
  })

  const toggleOption = (option: keyof AccessibilityControlProps) => {
    setOptions((prevState) => ({
      ...prevState,
      [option]: !options[option],
    }))
  }

  React.useEffect(() => {
    const classNameList = accessibleStyles({ ...options })
      .toString()
      .split(' ')

    document.body.classList.value = 'foundation-theme'
    classNameList.forEach((className) => document.body.classList.add(className))
  }, [options])

  return (
    <AccessibilityControlContext.Provider value={{ options, toggleOption }}>
      {children}
    </AccessibilityControlContext.Provider>
  )
}

export { AccessibilityControl, useAccessibilityControl }
