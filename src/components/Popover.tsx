import {
  Checkbox,
  Flex,
  keyframes,
  styled,
  Switch,
  Text,
} from '@grupoboticario/flora-react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import React from 'react'
import { ReactComponent } from 'types'

import { useAccessibilityControl } from '~/hooks/AccessibilityControl'

import { Separator } from './Separator'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})
const StyledContent = styled(PopoverPrimitive.Content, {
  padding: 20,
  width: 360,
  backgroundColor: 'white',
  boxShadow: '$downMid',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  '&:focus': {},
})

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$brand-1',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': {},
  '&:focus': {
    boxShadow: '$outline',
  },
})

export const PopoverAccessibility = ({ children }: ReactComponent) => {
  const {
    options: {
      boldTexts,
      contrast,
      dyslexia,
      increaseFont,
      monochromatic,
      virtualInterpret,
    },
    toggleOption,
  } = useAccessibilityControl()

  return (
    <PopoverPrimitive.Root defaultOpen>
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
      <StyledContent side="bottom" align="start" sideOffset={5} asChild>
        <Flex direction="column" gap="$4">
          <Text size="overline" tabIndex={0}>
            Ajustes de texto
          </Text>
          <Flex align="center" gap="$2">
            <Checkbox
              id="increase-font-size"
              size="small"
              checked={!!increaseFont}
              onClick={() => {
                toggleOption('increaseFont')
              }}
            />
            <Text as="label" htmlFor="increase-font-size">
              Aumentar fonte
            </Text>
          </Flex>
          <Flex align="center" gap="$2">
            <Checkbox
              id="bold-text"
              size="small"
              checked={!!boldTexts}
              onClick={() => {
                toggleOption('boldTexts')
              }}
            />
            <Text as="label" htmlFor="bold-text">
              Textos em negrito
            </Text>
          </Flex>
          <Flex align="center" gap="$2">
            <Checkbox
              id="dyslexia"
              size="small"
              checked={!!dyslexia}
              onClick={() => {
                toggleOption('dyslexia')
              }}
            />
            <Text as="label" htmlFor="dyslexia">
              Dislexia
            </Text>
          </Flex>
          <Text size="overline" tabIndex={0}>
            Ajustes de Cor
          </Text>
          <Flex align="center" gap="$2">
            <Checkbox
              id="contrast"
              size="small"
              checked={!!contrast}
              onClick={() => {
                toggleOption('contrast')
              }}
            />
            <Text as="label" htmlFor="contrast">
              Alto contraste
            </Text>
          </Flex>
          <Flex align="center" gap="$2">
            <Checkbox
              id="monochromatic"
              size="small"
              checked={!!monochromatic}
              onClick={() => {
                toggleOption('monochromatic')
              }}
            />
            <Text as="label" htmlFor="monochromatic">
              Monocromático
            </Text>
          </Flex>
          <Separator css={{ height: 1, backgroundColor: '#000' }} />
          <Flex
            align="center"
            gap="$2"
            css={{ justifyContent: 'space-between' }}
          >
            <Text as="label" size="overline" htmlFor="virtual-interpret">
              Interprete de libras Virtual
            </Text>
            <Switch
              id="virtual-interpret"
              checked={!!virtualInterpret}
              onClick={() => {
                toggleOption('virtualInterpret')
              }}
            />
          </Flex>
          <StyledClose aria-label="Close">
            <svg
              aria-hidden
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#626CC3"
              />
            </svg>
          </StyledClose>
        </Flex>
      </StyledContent>
    </PopoverPrimitive.Root>
  )
}
