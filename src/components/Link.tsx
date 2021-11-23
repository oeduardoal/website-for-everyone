import { Text } from '@grupoboticario/flora-react'
import NextLink from 'next/link'
import React from 'react'
import { ReactComponent } from 'types'

export const Link = (
  props: React.ComponentPropsWithoutRef<'a'> &
    React.ComponentPropsWithoutRef<typeof Text> &
    ReactComponent,
) => {
  const { href = '/', css = {} } = props

  return (
    <NextLink href={href}>
      <Text
        tabIndex={0}
        {...props}
        as="a"
        color="$light-dark-2"
        css={{
          ...css,
          color: '$light-dark-2',
          textDecoration: 'underline',
        }}
      />
    </NextLink>
  )
}
