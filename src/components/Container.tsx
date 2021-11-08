import { Container as FContainer } from '@grupoboticario/flora-react'
import React from 'react'
import { ReactComponent } from 'types'

export const Container = (
  props: ReactComponent & React.ComponentPropsWithoutRef<typeof FContainer>,
) => {
  const { css = {} } = props

  return (
    <FContainer
      {...props}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 28,
        paddingRight: 28,
        '@tablet': {
          paddingLeft: 60,
          paddingRight: 60,
        },
        '@desktop': {
          paddingLeft: 152,
          paddingRight: 152,
        },
        ...css,
      }}
    />
  )
}
