import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  styled,
  Tooltip,
} from '@grupoboticario/flora-react'
import React from 'react'

import HandsSvg from '~/assets/hands.svg'

const StyledButton = styled(Button, {
  variants: {
    alt: {
      true: {
        color: '#000F99',
        backgroundColor: '$actionNavigationAltStatic',
        '&:focus, &:hover': {
          backgroundColor: '$actionNavigationAltStatic',
        },
      },
    },
    ghost: {
      true: {
        color: '#000F99',
        backgroundColor: 'transparent',
        '&:focus, &:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
})

type AccessibleProps = {
  videoId?: string
  videoTitle?: string
}

export const ButtonAccessible = (
  props: React.ComponentPropsWithoutRef<typeof StyledButton> & AccessibleProps,
) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { videoId = '', videoTitle = 'Header', ...rest } = props

  return (
    <>
      <Tooltip
        align="start"
        direction="bottom"
        text="Vídeo com a tradução do conteúdo escrito neste bloco para Libras"
      >
        <StyledButton
          {...rest}
          onClick={() => setIsOpen(true)}
          css={{
            width: 40,
            height: 40,
            padding: 0,
            ...props.css,
          }}
          aria-label="Clique para ver vídeo com a tradução do conteúdo escrito neste bloco para Libras"
          tabIndex={0}
        >
          <HandsSvg />
        </StyledButton>
      </Tooltip>
      <Modal open={isOpen} onOpenChange={setIsOpen} size="small">
        <ModalContent>
          <ModalHeader>{videoTitle}</ModalHeader>
          <ModalBody>
            <Box
              tabIndex={0}
              css={{ width: '100%', minHeight: 408 }}
              as="iframe"
              src={`https://www.youtube.com/embed/${videoId}?controls=1&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
