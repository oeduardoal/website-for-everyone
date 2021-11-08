import { Card as FCard } from '@grupoboticario/flora-react'
import React from 'react'
import { ReactComponent } from 'types'

export const Card = (
  props: ReactComponent & React.ComponentPropsWithoutRef<typeof FCard>,
) => {
  const { css = {} } = props

  return (
    <FCard
      {...props}
      css={{
        width: '100%',
        backgroundColor: '$light-dark-1',
        padding: '$5',
        display: 'flex',
        flexDirection: 'column',
        gap: '$5',
        alignItems: 'flex-start',
        '&:before': { boxShadow: 'none' },
        '@tablet': {
          width: 350,
        },
        ...css,
      }}
    />
  )
}
