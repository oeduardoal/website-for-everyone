import { Box, Flex, Text } from '@grupoboticario/flora-react'
import React from 'react'
import { ReactComponent } from 'types'

import { Container } from './Container'
import { Link } from './Link'

const borderTop = 'solid 1px #FFFFFF'

export const Footer = (props: ReactComponent) => {
  const { css = {} } = props

  return (
    <Container
      as="footer"
      {...props}
      css={{
        backgroundColor: '$brand-3',
        gap: '$4',
        alignItems: 'normal',
        paddingTop: 64,
        paddingBottom: 64,
        display: 'flex',
        '@tablet': {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        ...css,
      }}
    >
      <Flex direction="column" css={{ gap: '$2' }}>
        <Text tabIndex={0} size="action" color="$light-light">
          Redes sociais
        </Text>
        <Box>
          <svg
            width="120"
            height="24"
            viewBox="0 0 120 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.72825 6.4866V8.9652H8V11.9946H9.72825V21H13.2808V11.9946H15.664C15.664 11.9946 15.8886 10.542 15.9966 8.9526H13.2945V6.8826C13.2945 6.5712 13.682 6.1554 14.066 6.1554H16V3H13.3682C9.64081 3 9.72825 6.033 9.72825 6.4866Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.1745 11.9996C49.1694 9.1446 46.8544 6.83155 43.9994 6.82755C41.1444 6.83256 38.8324 9.14561 38.8283 11.9996C38.8314 14.8546 41.1454 17.1696 44.0004 17.1737C46.8564 17.1696 49.1704 14.8556 49.1745 11.9996ZM43.9994 15.1611C42.2543 15.1621 40.8389 13.7476 40.8379 12.0016C40.8379 10.2565 42.2523 8.84105 43.9984 8.84004C43.9984 8.84004 42.2533 8.83904 43.9994 8.84004C45.7454 8.84105 47.1599 10.2565 47.1599 12.0016C47.1589 13.7466 45.7444 15.1611 43.9994 15.1611Z"
              fill="white"
            />
            <path
              d="M50.4209 6.86702C50.4209 6.18282 49.867 5.62785 49.1828 5.62785C48.4976 5.62785 47.9436 6.18282 47.9436 6.86702C47.9436 7.55121 48.4976 8.10619 49.1828 8.10619C49.867 8.10619 50.4209 7.55121 50.4209 6.86702Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.9574 2H48.0416C51.3303 2.00401 53.996 4.66867 54 7.95743V16.0416C53.997 19.3303 51.3313 21.996 48.0426 22H39.9584C36.6697 21.997 34.004 19.3313 34 16.0426V7.95943C34.003 4.66967 36.6687 2.00401 39.9574 2ZM48.0416 19.9885C50.2214 19.9885 51.9885 18.2224 51.9885 16.0416V7.95943C51.9885 5.77961 50.2214 4.01252 48.0426 4.01152H39.9584C37.7786 4.01152 36.0125 5.77861 36.0115 7.95743V16.0416C36.0115 18.2214 37.7776 19.9875 39.9574 19.9885H48.0416Z"
              fill="white"
            />
            <path
              d="M83.8796 7.21379C84.6428 6.77629 85.226 6.08329 85.5032 5.25904C84.7868 5.66329 83.9984 5.95904 83.156 6.11654C82.4522 5.40079 81.4784 4.99654 80.4614 5.00002C78.422 5.00002 76.7696 6.58379 76.7696 8.53503C76.7696 8.81153 76.802 9.08103 76.865 9.34003C73.9076 9.20353 71.1446 7.86304 69.2546 5.64754C68.927 6.18479 68.7524 6.79904 68.7542 7.42379C68.7542 8.64878 69.4076 9.73378 70.3976 10.3655C69.8108 10.348 69.2384 10.1958 68.7236 9.92278V9.96653C68.7344 11.6605 69.9746 13.1113 71.6864 13.4315C71.141 13.5715 70.5722 13.5925 70.0178 13.491C70.5128 14.94 71.897 15.9253 73.4666 15.9463C72.1526 16.9315 70.5398 17.4618 68.8802 17.4583C68.5832 17.4583 68.2898 17.4425 68 17.4093C69.692 18.4523 71.6558 19.0035 73.6592 19C80.4524 19 84.1658 13.6135 84.1658 8.94103L84.1532 8.48253C84.8768 7.98904 85.5032 7.36954 86 6.65729C85.3376 6.93729 84.6266 7.12979 83.8796 7.21379Z"
              fill="white"
            />
            <path
              d="M111.03 12.28L105.573 14.856C105.464 14.907 105.333 14.862 105.281 14.753C105.267 14.724 105.259 14.692 105.259 14.659V9.35C105.259 9.189 105.432 9.084 105.577 9.157L111.035 11.892C111.142 11.946 111.185 12.075 111.133 12.182C111.11 12.226 111.074 12.259 111.03 12.28ZM113.845 2C116.139 2 118 3.839 118 6.107V17.894C118 20.161 116.14 22 113.845 22H102.154C99.86 22 98 20.161 98 17.894V6.107C98 3.839 99.859 2.001 102.154 2.001L113.845 2ZM114 4.0002H102C100.896 4.0002 99.9997 4.8962 99.9997 6.0002V18.0002C99.9997 19.1042 100.896 20.0002 102 20.0002H114C115.104 20.0002 116 19.1042 116 18.0002V6.0002C116 4.8962 115.104 4.0002 114 4.0002Z"
              fill="white"
            />
          </svg>
        </Box>
      </Flex>
      <Flex
        direction="column"
        css={{
          paddingTop: 20,
          gap: '$2',
          '@mobile': { borderTop },
          '@tablet': { borderTop: 'none' },
        }}
      >
        <Text
          tabIndex={0}
          size="action"
          color="$light-light"
          css={{ paddingBottom: '$2' }}
        >
          Institucional
        </Text>
        <Link href="/" size="auxiliarSmall">
          Loja on-line O Boticário
        </Link>
        <Link href="/" size="auxiliarSmall">
          Quero ser um revendedor
        </Link>
      </Flex>
      <Flex
        direction="column"
        css={{
          paddingTop: 20,
          gap: '$2',
          '@mobile': { borderTop },
          '@tablet': { borderTop: 'none' },
        }}
      >
        <Text
          tabIndex={0}
          size="action"
          color="$light-light"
          css={{ paddingBottom: '$2' }}
        >
          Links úteis
        </Text>
        <Link href="/" size="auxiliarSmall">
          Política de privacidade
        </Link>
        <Link href="/" size="auxiliarSmall">
          Termos de uso
        </Link>
      </Flex>
      <Flex
        direction="column"
        css={{
          paddingTop: 20,
          gap: '$2',
          '@mobile': { borderTop },
          '@tablet': { borderTop: 'none' },
        }}
      >
        <Text
          tabIndex={0}
          size="action"
          color="$light-light"
          css={{ paddingBottom: '$2' }}
        >
          Navegação
        </Text>
        <Link href="/" size="auxiliarSmall">
          Preferências de cookies
        </Link>
        <Link href="/" size="auxiliarSmall">
          Exerça seus direitos
        </Link>
      </Flex>
    </Container>
  )
}
