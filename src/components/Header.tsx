import { Button, Flex } from '@grupoboticario/flora-react'
import React from 'react'

import { Container } from './Container'
import { Link } from './Link'

export const Header = () => {
  return (
    <>
      <Flex
        css={{
          height: 50,
          backgroundColor: '$brand-1',
          alignItems: 'center',
        }}
      >
        <Container
          css={{
            flexDirection: 'column',
          }}
        >
          <Flex
            css={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="ghost"
              leftIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66669C10.9167 1.66669 11.6667 2.41669 11.6667 3.33335C11.6667 4.25002 10.9167 5.00002 10 5.00002C9.08333 5.00002 8.33333 4.25002 8.33333 3.33335C8.33333 2.41669 9.08333 1.66669 10 1.66669ZM17.5 7.50002H12.5V18.3334H10.8333V13.3334H9.16667V18.3334H7.5V7.50002H2.5V5.83335H17.5V7.50002Z"
                    fill="white"
                  />
                </svg>
              }
              rightIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94 5.72668L8 8.78002L11.06 5.72668L12 6.66668L8 10.6667L4 6.66668L4.94 5.72668Z"
                    fill="white"
                  />
                </svg>
              }
              css={{
                color: '$light-dark-2',
                padding: 6,
                height: 28,
                $$boxShadow: 'inset 0 0 0 1px $colors$light-dark-2',
                boxShadow: '$$boxShadow',
                '&:hover': {
                  boxShadow: '$$boxShadow',
                  backgroundColor: 'transparent',
                },
              }}
            >
              Acessibilidade
            </Button>
            <Link href="/a">Saiba Mais</Link>
          </Flex>
        </Container>
      </Flex>
      <Flex
        css={{
          height: 56,
          backgroundColor: '$brand-1',
          borderTop: 'solid 1px #FFFFFF',
        }}
      >
        <Container
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Button variant="unstyled" css={{ width: 50, height: 50 }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2493 17.5H18.3277L18.001 17.185C19.1443 15.855 19.8327 14.1284 19.8327 12.25C19.8327 8.06169 16.4377 4.66669 12.2493 4.66669C8.06102 4.66669 4.66602 8.06169 4.66602 12.25C4.66602 16.4384 8.06102 19.8334 12.2493 19.8334C14.1277 19.8334 15.8543 19.145 17.1843 18.0017L17.4993 18.3284V19.25L23.3327 25.0717L25.071 23.3334L19.2493 17.5ZM12.2493 17.5C9.34435 17.5 6.99935 15.155 6.99935 12.25C6.99935 9.34502 9.34435 7.00002 12.2493 7.00002C15.1543 7.00002 17.4993 9.34502 17.4993 12.25C17.4993 15.155 15.1543 17.5 12.2493 17.5Z"
                fill="white"
              />
            </svg>
          </Button>
        </Container>
      </Flex>
    </>
  )
}
