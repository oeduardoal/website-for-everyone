import NextImage from 'next/image'
import React from 'react'
import { ReactComponent } from 'types'

const imageLoader = ({ src }: { src: string }) => src

export const Image = (
  props: ReactComponent & React.ComponentPropsWithoutRef<typeof NextImage>,
) => {
  return (
    <NextImage alt={props.alt} loader={imageLoader} unoptimized {...props} />
  )
}
