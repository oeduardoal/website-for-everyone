import { Box } from '@grupoboticario/flora-react'
import React from 'react'
import { ReactComponent } from 'types'

export const Separator = (
  props: ReactComponent & React.ComponentPropsWithoutRef<typeof Box>,
) => {
  const { css = {} } = props

  return (
    <Box
      {...props}
      css={{
        width: '100%',
        height: 8,
        backgroundColor: '$light-dark-1',
        ...css,
      }}
    />
  )
}
