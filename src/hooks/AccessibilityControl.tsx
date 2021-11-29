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
        fontSize: '115%',
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
