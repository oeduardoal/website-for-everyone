import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@grupoboticario/flora-react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Banner1 from '~/assets/banner-1.png'
import { ButtonAccessible } from '~/components/ButtonAccessible'
import { Card } from '~/components/Card'
import { Container } from '~/components/Container'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Separator } from '~/components/Separator'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Página de acessibilidade</title>
        <meta
          name="description"
          content="Nosso compromisso com a acessibilidade"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      {/* Section 1 */}
      <Flex
        css={{
          gap: 52,
          justifyContent: 'space-between',
          flexDirection: 'column',
          paddingTop: '$7',
          paddingBottom: '$7',
          '@tablet': {
            paddingTop: '$7',
            paddingBottom: '$7',
          },
          '@desktop': {
            alignItems: 'center',
            flexDirection: 'row',
          },
          '@ultrawide': {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
      >
        <Box
          css={{
            paddingLeft: 28,
            paddingRight: 28,
            gap: '$4',
            display: 'flex',
            alignItems: 'normal',
            flexDirection: 'column',
            '@tablet': {
              width: '35%',
              paddingLeft: 60,
            },
            '@desktop': {
              paddingLeft: 152,
            },
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.33331C21.8333 3.33331 23.3333 4.83331 23.3333 6.66665C23.3333 8.49998 21.8333 9.99998 20 9.99998C18.1667 9.99998 16.6667 8.49998 16.6667 6.66665C16.6667 4.83331 18.1667 3.33331 20 3.33331ZM35 15H25V36.6666H21.6667V26.6666H18.3333V36.6666H15V15H5V11.6666H35V15Z"
              fill="#878787"
            />
          </svg>

          <Text tabIndex={0} size="overline" color="$medium-medium">
            Acessibilidade
          </Text>
          <Heading tabIndex={0} level={4} color="$brand-1">
            Nosso site é feito para todas as pessoas
          </Heading>
          <ButtonAccessible
            videoTitle="Nosso site é feito para todas as pessoas"
            videoId="FLRLMalBjPE"
          />
        </Box>
        <Box
          data-edu
          css={{
            display: 'none',
            marginBottom: -3,
            position: 'relative',
            height: '100%',
            '@tablet': {
              display: 'block',
              width: '65%',
            },
          }}
        >
          <Image src={Banner1.src} alt="Banner 1" />
        </Box>
      </Flex>
      <Container
        css={{
          backgroundColor: '$brand-3',
          paddingTop: '$20',
          paddingBottom: '$20',
          gap: '$3',
        }}
      >
        <Flex
          gap="$4"
          css={{
            flexDirection: 'column',
            '@tablet': {
              flexDirection: 'row',
            },
          }}
        >
          <Heading tabIndex={0} level={5} color="$light-light">
            Nosso compromisso com a acessibilidade
          </Heading>
          <ButtonAccessible
            alt
            videoTitle="Nosso site é feito para todas as pessoas"
            videoId="HDreMPCHVgk"
          />
        </Flex>
        <Text tabIndex={0} size="bodyLargeStandard" color="$light-light">
          O Grupo Boticário busca excelência em usabilidade, independente de
          qualquer limitação tecnológica, dificuldade ou deficiência.
          <br />
          <br />
          Assumimos o compromisso de evoluir e promover uma experiência simples
          e inclusiva para todos. Para assegurar uma boa navegação, temos
          tradução do conteúdo do site para libras, suporte para navegação por
          teclado, além de ajustes de fonte e contraste.
        </Text>
      </Container>
      <Container
        css={{
          paddingTop: 56,
          paddingBottom: '$7',
          gap: '$4',
          display: 'flex',
          '@tablet': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <Flex
          direction="column"
          css={{ gap: '$5', '@tablet': { width: '30%' } }}
        >
          <Heading tabIndex={0} level={5} color="$dark-light">
            Nossas ferramentas de acessibilidade
          </Heading>
          <ButtonAccessible
            videoId="h_9X5bxtZm0"
            videoTitle="Nossas ferramentas de acessibilidade"
          />
        </Flex>
        <Flex css={{ flexWrap: 'wrap', gap: '$4', justifyContent: 'flex-end' }}>
          <Card>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.03063 3.2C7.15063 2.44 8.51062 2 10.0006 2C13.9306 2 17.0006 5.07 17.0006 9C17.0006 10.26 16.6206 11.65 15.9306 12.9C15.9106 12.94 15.8806 12.98 15.8506 13.03L14.3706 11.55C14.7706 10.69 15.0006 9.8 15.0006 9C15.0006 6.2 12.8006 4 10.0006 4C9.08062 4 8.24063 4.26 7.50063 4.67L6.03063 3.2ZM17.2106 14.38L18.6406 15.81C20.1106 13.93 21.0006 11.57 21.0006 9C21.0006 5.96 19.7706 3.21 17.7806 1.22L16.3606 2.64C17.9906 4.26 19.0006 6.51 19.0006 9C19.0006 11.02 18.3306 12.88 17.2106 14.38ZM10.0006 6.5C9.79062 6.5 9.60062 6.53 9.41062 6.58L12.4206 9.59C12.4706 9.4 12.5006 9.21 12.5006 9C12.5006 7.62 11.3806 6.5 10.0006 6.5ZM21.1906 21.19L2.81062 2.81L1.39062 4.22L3.52063 6.35C3.19063 7.16 3.00063 8.05 3.00063 9H5.00063C5.00063 8.64 5.05063 8.29 5.12063 7.95L11.7306 14.56C10.8506 15.24 9.95062 15.97 9.46062 17.46C8.96062 18.96 8.46063 19.47 7.75063 19.84C7.56063 19.94 7.29063 20 7.00063 20C5.90063 20 5.00063 19.1 5.00063 18H3.00063C3.00063 20.21 4.79063 22 7.00063 22C7.57063 22 8.13063 21.88 8.64063 21.65C10.0006 20.94 10.7706 19.92 11.3706 18.1C11.6906 17.12 12.2706 16.67 13.0806 16.05C13.1106 16.03 13.1306 16.01 13.1606 15.99L19.7806 22.61L21.1906 21.19Z"
                fill="currentColor"
              />
            </svg>
            <Text tabIndex={0} size="bodyLargeStandard" color="$brand-1">
              Intérprete virtual de Libras
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              Por meio do Hand Talk, nosso site permite a tradução automática
              para Libras. Com traduções simultâneas ajustáveis, o intérprete
              virtual garante agilidade e independência para a comunidade surda.
            </Text>
            <Button variant="ghost">Acessar HandTalk</Button>
          </Card>
          <Card css={{ justifyContent: 'flex-start' }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7868 11.2337C12.1842 11.2664 11.5829 11.3278 10.9776 11.3199C10.4857 11.3137 10.0264 11.2106 9.62355 10.9262C9.46695 10.8152 9.3039 10.6826 9.36063 10.472C9.41736 10.2614 9.62729 10.2435 9.81378 10.2233C10.3529 10.1608 10.7953 10.0651 11.3285 9.93071C12.2956 9.68682 13.1822 9.26107 14.0684 8.82586C14.9825 8.37693 15.9198 7.96555 16.9117 7.69684C17.445 7.5522 17.996 7.56885 18.5422 7.67301C18.765 7.71818 18.9666 7.83119 19.1173 7.99526C19.6748 8.56819 21.0909 9.46121 21.0909 9.46121C21.0909 9.46121 21.79 10.0332 21.9164 10.4854C22.0838 11.0849 21.9738 11.669 21.8144 12.2514C21.5471 13.2365 21.1595 14.1777 20.7077 15.0965C20.4886 15.5418 20.3949 16.0107 20.3534 16.4939C20.3069 17.0129 20.2984 17.5344 20.328 18.0545C20.3619 18.6135 20.3551 19.1725 20.3422 19.7311C20.3303 20.2456 20.3055 20.7608 20.2454 21.2731C20.2182 21.5017 20.0565 21.6473 19.7923 21.6861C19.5925 21.7155 19.3765 21.597 19.2915 21.4008C19.1896 21.1664 19.1896 20.911 19.1604 20.6652C19.0735 19.9658 18.993 19.2655 18.9226 18.5642C18.8924 18.2563 18.852 17.9497 18.8173 17.6425C18.8003 17.4574 18.7276 17.2811 18.6081 17.1351C18.4382 16.9317 18.2609 16.9415 18.1257 17.1655C17.9725 17.4192 17.9318 17.7071 17.873 17.9883C17.5876 19.3595 17.3818 20.7445 17.1236 22.1204C17.0856 22.3228 17.0397 22.5246 16.9378 22.7081C16.7819 22.9905 16.5642 23.0626 16.2088 22.9477C15.9615 22.8674 15.842 22.6343 15.8766 22.36C15.9473 21.8004 16.0023 21.2388 16.0668 20.6786C16.1263 20.1611 16.1959 19.6449 16.2499 19.1271C16.3111 18.5394 16.4249 17.9579 16.4059 17.364C16.4036 17.3097 16.3921 17.2561 16.3719 17.2053C16.3097 17.046 16.2051 17.0222 16.0747 17.1351C15.9388 17.2536 15.8542 17.4097 15.7635 17.5596C14.8484 19.0693 13.9404 20.5829 13.0932 22.1305C12.9739 22.3483 12.78 22.4266 12.5327 22.4217C12.2925 22.4168 12.1047 22.3381 12 22.1181C11.8954 21.898 11.8662 21.6936 11.9715 21.4612C12.6988 19.8669 13.4549 18.2854 14.2203 16.7077C14.3086 16.5256 14.4034 16.3437 14.3494 16.1328C14.2998 15.9385 14.1748 15.8791 13.9801 15.9545C13.866 16.0033 13.7643 16.0753 13.6819 16.1654C12.4841 17.3793 11.2266 18.5361 10.0169 19.7386C9.77913 19.9737 9.53285 19.9998 9.27944 19.8101C8.97168 19.5815 8.88709 19.2639 9.07766 18.9831C9.20403 18.7973 9.35519 18.6269 9.49684 18.4509C10.5441 17.1495 11.5992 15.854 12.5823 14.5062C13.064 13.8556 13.4488 13.1435 13.7253 12.3905C13.7788 12.2361 13.8085 12.0749 13.8133 11.9122C13.8286 11.5766 13.6336 11.3474 13.2725 11.2651C13.113 11.2323 12.9494 11.2218 12.7868 11.2337Z"
                fill="currentColor"
              />
              <path
                d="M8.05536 1L8.25917 1.00163C8.66918 1.12995 8.81118 1.43424 8.87674 1.81493C9.11928 3.22179 9.0539 3.44176 9.2781 4.85156C9.33571 5.21771 9.66384 6.5 10.0495 6.5C10.7327 6.5 10.6787 6.06452 10.7522 5.5C10.9081 4.30264 10.7777 3.10954 10.9934 1.91576C11.0532 1.58568 11.2481 1.4159 11.5776 1.43255C11.9432 1.45116 12.22 1.68755 12.2231 2C12.2271 2.40939 12.2553 2.90313 12.2231 3.35696C12.1277 4.68979 12.2231 5.92533 12.3457 7.34775C12.3504 7.44374 12.2815 7.45255 12.2231 7.47573C11.7404 7.66673 11.24 7.80157 10.7522 7.97037C10.3075 8.12448 9.73091 8.21786 9.2781 8.29688C8.6174 8.41278 7.57843 9.42367 7.57843 10.3125C7.44934 11.3199 8.34682 12.4005 8.86213 12.772C9.39613 13.157 10.0069 13.3515 10.6741 13.3705C10.9629 13.3705 10.9629 13.5 10.9629 13.5C10.9629 13.5 10.0661 14.5867 9.46655 15.3808C9.23081 15.6926 8.98011 15.9939 8.74267 16.3047C8.67269 16.3962 8.60373 16.4376 8.47805 16.4249C8.31452 16.4249 8.11723 16.4446 7.88857 16.4807C7.72756 16.5062 7.5876 16.4598 7.44934 16.3939C6.82567 16.0968 6.42279 15.6044 6.15851 15.0037C5.78485 14.1548 5.56065 13.2657 5.37416 12.3649C5.27225 11.8768 5.24711 11.3734 5.06571 10.9013C4.80687 10.2274 4.39346 9.63675 3.96748 9.05526C3.29115 8.13194 2.63351 7.19751 2.08253 6.19779C1.93612 5.93202 1.98639 5.71555 2.2184 5.55622C2.44022 5.40343 2.69839 5.42759 2.90221 5.6434C3.15664 5.91276 3.3985 6.19289 3.64172 6.47171C4.20788 7.12122 4.77245 7.7716 5.33543 8.42284C5.4631 8.57758 5.63988 8.68799 5.83886 8.73726C6.07461 8.79374 6.18637 8.70983 6.18569 8.47867C6.18569 8.29681 6.13032 8.12573 6.0617 7.95889C5.5936 6.81812 5.04771 5.71 4.53308 4.58915C4.34658 4.18332 4.12884 3.78891 4.00859 3.35696C3.99445 3.30473 3.98501 3.25142 3.98039 3.19763C3.94982 2.88061 4.05241 2.74903 4.42199 2.62627C4.65774 2.54791 4.8585 2.61778 5.00627 2.85775C5.33951 3.39973 5.62179 3.96783 5.92344 4.52711C6.38542 5.38449 6.8482 6.24132 7.31177 7.0976C7.37728 7.23051 7.46767 7.3507 7.57843 7.45217C7.64059 7.50507 7.71057 7.56743 7.80331 7.53641C7.89604 7.50539 7.91303 7.41528 7.9256 7.33594C7.9667 7.07475 7.9239 6.81584 7.90657 6.55693C7.83705 5.51824 7.76175 4.4801 7.68068 3.4425C7.63719 2.88746 7.57877 2.33079 7.52442 1.7751C7.4806 1.3376 7.61919 1.13615 8.05536 1Z"
                fill="currentColor"
              />
            </svg>
            <Text tabIndex={0} size="bodyLargeStandard" color="$brand-1">
              Tradução do conteúdo para Libras{' '}
              <ButtonAccessible
                ghost
                videoId="-8I8-2Q2jSY"
                videoTitle="Tradução do conteúdo para Libras"
              />
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              Quando encontrar o ícone de Libras em alguma de nossas páginas,
              basta clicar e visualizar a tradução do conteúdo por um intérprete
              humano de Libras.
            </Text>
          </Card>
          <Card>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
                fill="currentColor"
              />
            </svg>

            <Text tabIndex={0} size="bodyLargeStandard" color="$brand-1">
              Ajuste de cores, contraste e conteúdo{' '}
              <ButtonAccessible
                ghost
                videoId="hBgiJjRAzHc"
                videoTitle="Ajuste de cores, contraste e conteúdo"
              />
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              É possível encontrar opções para as cores e contraste de planos de
              fundo, imagens e conteúdo. Além disso, pode-se ajustar o tamanho e
              estilo das fontes. Você encontrará essas opções no menu superior
              dos nossos sites.
            </Text>
          </Card>
          <Card>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z"
                fill="currentColor"
              />
            </svg>
            <Text tabIndex={0} size="bodyLargeStandard" color="$brand-1">
              Compatibilidade com leitores de tela{' '}
              <ButtonAccessible
                ghost
                videoId="ldieYFaZhO4"
                videoTitle="Compatibilidade com leitores de tela"
              />
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              No nosso site, seguimos as Diretrizes de Acessibilidade de
              Conteúdo de Website (WCAG) 2.0, o que significa que mantemos o
              conteúdo amigável para leitores de tela, navegação por teclado,
              além de outras adaptações para facilitar o acesso para todas as
              pessoas.
            </Text>
          </Card>
        </Flex>
      </Container>
      <Separator />
      <Container
        css={{
          paddingTop: 56,
          paddingBottom: '$7',
          gap: '$4',
          display: 'flex',
          '@tablet': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <Flex
          direction="column"
          css={{ gap: '$5', '@tablet': { width: '40%' } }}
        >
          <Heading tabIndex={0} level={5} color="$dark-light">
            Nossas ações de acessibilidade
          </Heading>{' '}
          <ButtonAccessible
            videoId="nfIyuVEAmns"
            videoTitle="Nossas ações de acessibilidade"
          />
        </Flex>
        <Flex css={{ flexWrap: 'wrap', gap: '$4', justifyContent: 'flex-end' }}>
          <Card>
            <Image
              css={{ alignSelf: 'center' }}
              src="/actions/1.png"
              width={1000}
              height={172}
              alt="Comunicação acessível"
            />
            <Heading tabIndex={0} level={6}>
              Comunicação acessível{' '}
              <ButtonAccessible
                ghost
                videoId="ZNEL2dfYRsc"
                videoTitle="Comunicação acessível"
              />
            </Heading>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              No Grupo Boticário prezamos por uma comunicação que seja acessível
              e compreendida por todas as pessoas. Para isso, contamos com o
              apoio de intérpretes de Libras em eventos internos e externos,
              além das legendas e descrição de aspectos visuais.
            </Text>
            <Button>Acessar eventos online</Button>
          </Card>
          <Card>
            <Image
              src="/actions/2.png"
              width={1000}
              height={172}
              alt="Inclusão na Real"
            />
            <Heading tabIndex={0} level={6}>
              Inclusão na Real{' '}
              <ButtonAccessible
                ghost
                videoId="rQOAJny-UlM"
                videoTitle="Inclusão na Real"
              />
            </Heading>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              O Inclusão na Real é nosso grupo de afinidades que atua para
              despertar o potencial de todas as pessoas e garantir a
              acessibilidade. Dessa forma, viabiliza que colaboradores que são
              pessoas com deficiência sintam-se incluídas no Grupo Boticário.
            </Text>
            <Button>Acessar Inclusão na Real</Button>
          </Card>
          <Card>
            <Image
              src="/actions/3.png"
              width={1000}
              height={172}
              alt=">Desejos de Make - Canal Acessível"
            />
            <Heading tabIndex={0} level={6}>
              Desejos de Make - Canal Acessível{' '}
              <ButtonAccessible
                ghost
                videoId="ejfUZhCTr1I"
                videoTitle="Desejos de Make - Canal Acessível"
              />
            </Heading>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              Canal no Youtube com vídeos de maquiagem com audiodescrição,
              legendas e tradução em libras inspirado nas dúvidas mais populares
              da internet. Makes, técnicas, produtos e truques mais comentados
              se transformam em tutoriais e dicas.
            </Text>
            <Button>Acessar Desejos de Make</Button>
          </Card>
          <Card>
            <Image
              src="/actions/4.png"
              width={1000}
              height={172}
              alt=">Etiquetas sensoriais"
            />
            <Heading tabIndex={0} level={6}>
              Etiquetas sensoriais{' '}
              <ButtonAccessible
                ghost
                videoId="L934paDVkkU"
                videoTitle="Etiquetas sensoriais"
              />
            </Heading>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              Pessoas com deficiência visual não conseguem diferenciar produtos
              com embalagens iguais, o que, infelizmente, ainda é um problema
              comum em nosso portfólio. Para resolver isso, criamos para todas
              as marcas as etiquetas sensoriais, adesivos em relevo que podem
              ser colados nos produtos, permitindo diferenciação entre os itens
              e simplificando o uso cotidiano.
            </Text>
            <Button>Acessar mais informações</Button>
          </Card>
        </Flex>
      </Container>
      <Separator />
      <Container
        css={{
          backgroundColor: '$brand-1',
          gap: '$4',
          alignItems: 'center',
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <Text
          tabIndex={0}
          size="bodyLargeStandard"
          color="$light-light"
          css={{ textAlign: 'center' }}
        >
          Confira as nossas oportunidades de trabalho para PcD!{' '}
          <ButtonAccessible
            videoId="Uet5jwbmLOQ"
            videoTitle="Confira as nossas oportunidades de trabalho para PcD!"
          />
        </Text>
        <Flex
          gap="$4"
          css={{
            flexDirection: 'column',
            '@tablet': {
              flexDirection: 'row',
            },
          }}
        >
          <Button css={{ width: 272 }} variant="alt">
            Conheça nossas vagas
          </Button>
          <Button css={{ width: 272 }} variant="alt">
            Seja Representante
          </Button>
        </Flex>
      </Container>
      <Container
        css={{
          paddingTop: 56,
          paddingBottom: '$7',
          gap: '$4',
          display: 'flex',
          '@tablet': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <Flex direction="column" css={{ '@tablet': { width: '30%' } }}>
          <Heading tabIndex={0} level={5}>
            Canais de atendimento
          </Heading>
          <ButtonAccessible
            videoId="cvtaQBOn950"
            videoTitle="Canais de atendimento"
          />
        </Flex>
        <Flex
          css={{
            flexWrap: 'wrap',
            rowGap: 60,
            columnGap: 30,
            justifyContent: 'flex-end',
          }}
        >
          <Card css={{ backgroundColor: 'transparent', padding: 0, gap: '$1' }}>
            <Text tabIndex={0} size="overline" color="$dark-light">
              Canais de atendimento{' '}
              <ButtonAccessible
                ghost
                videoId="QTci1JOOgZU"
                videoTitle="Canais de atendimento"
              />
            </Text>
            <Text tabIndex={0} size="bodyLargeStandard" color="$brand-1">
              41 988356914
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              De segunda a sexta-feira, das 8h às 20h. Aos sábados, das 9h às
              18h. Aos domingos, das 9h às 15h.
            </Text>
            <Button variant="ghost" css={{ gap: '$2', alignSelf: 'normal' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.054 9.32391C10.8869 9.23933 10.0732 8.84225 9.92107 8.78558C9.76898 8.73141 9.65857 8.70308 9.54773 8.87016C9.4394 9.03308 9.12023 9.406 9.02273 9.51475C8.92523 9.6235 8.8294 9.63183 8.66482 9.55808C8.49773 9.4735 7.96398 9.29975 7.33023 8.73141C6.83523 8.291 6.50565 7.7485 6.40773 7.58141C6.31023 7.41641 6.3969 7.32308 6.4794 7.24058C6.55523 7.16475 6.64648 7.04975 6.73107 6.94975C6.81148 6.84975 6.83732 6.78266 6.89607 6.67433C6.95023 6.55725 6.92232 6.466 6.88107 6.3835C6.83982 6.301 6.50773 5.48308 6.36898 5.15725C6.23648 4.83391 6.09773 4.87516 5.99565 4.87516C5.90023 4.86641 5.7894 4.86641 5.67898 4.86641C5.56857 4.86641 5.38815 4.90766 5.23607 5.066C5.08398 5.23308 4.6544 5.63225 4.6544 6.43975C4.6544 7.24933 5.24898 8.03266 5.33148 8.14975C5.41607 8.25808 6.50107 9.92475 8.16565 10.641C8.56273 10.8081 8.87107 10.9081 9.1119 10.9906C9.50898 11.1164 9.87148 11.0989 10.1577 11.0577C10.4744 11.0056 11.1386 10.656 11.2777 10.2656C11.419 9.87266 11.419 9.54725 11.3777 9.4735C11.3365 9.39766 11.2282 9.35641 11.0611 9.28266L11.054 9.32391ZM8.03523 13.4168H8.02648C7.04107 13.4168 6.0669 13.1497 5.21607 12.6506L5.01648 12.5314L2.93315 13.0739L3.49315 11.0468L3.35857 10.8385C2.80834 9.96364 2.51644 8.95116 2.51648 7.91766C2.51648 4.89266 4.99273 2.42516 8.0394 2.42516C9.51523 2.42516 10.8998 3.00016 11.9415 4.04183C12.4553 4.54958 12.863 5.15457 13.1405 5.82152C13.4181 6.48847 13.5601 7.20401 13.5582 7.92641C13.554 10.9493 11.0798 13.4168 8.03732 13.4168H8.03523ZM12.7336 3.24975C11.4661 2.02558 9.7994 1.3335 8.02648 1.3335C4.36982 1.3335 1.39232 4.29808 1.39023 7.94141C1.39023 9.10475 1.69398 10.2397 2.27565 11.2443L1.33398 14.6668L4.85398 13.7489C5.82911 14.2746 6.91908 14.5512 8.0269 14.5539H8.02899C11.6877 14.5539 14.6652 11.5893 14.6673 7.9435C14.6673 6.17933 13.9794 4.51891 12.7252 3.271L12.7336 3.24975Z"
                  fill="currentColor"
                />
              </svg>
              Chamar no WhatsApp
            </Button>
          </Card>
          <Card
            css={{
              backgroundColor: 'transparent',
              padding: 0,
              gap: '$1',
            }}
          >
            <Text tabIndex={0} size="overline" color="$dark-light">
              Telefone{' '}
              <ButtonAccessible
                ghost
                videoId="m035r76rh6w"
                videoTitle="Telefone"
              />
            </Text>
            <Text tabIndex={0} size="bodyLargeStandard" color="$brand-1">
              0800 041 3011
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              De segunda a sábado, das 9h às 18h.
            </Text>
            <Button variant="ghost" css={{ gap: '$2', alignSelf: 'normal' }}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86 3.33333C4.9 3.92667 5 4.50667 5.16 5.06L4.36 5.86C4.08667 5.06 3.91333 4.21333 3.85333 3.33333H4.86ZM11.4333 11.3467C12 11.5067 12.58 11.6067 13.1667 11.6467V12.64C12.2867 12.58 11.44 12.4067 10.6333 12.14L11.4333 11.3467ZM5.5 2H3.16667C2.8 2 2.5 2.3 2.5 2.66667C2.5 8.92667 7.57333 14 13.8333 14C14.2 14 14.5 13.7 14.5 13.3333V11.0067C14.5 10.64 14.2 10.34 13.8333 10.34C13.0067 10.34 12.2 10.2067 11.4533 9.96C11.3867 9.93333 11.3133 9.92667 11.2467 9.92667C11.0733 9.92667 10.9067 9.99333 10.7733 10.12L9.30667 11.5867C7.42 10.62 5.87333 9.08 4.91333 7.19333L6.38 5.72667C6.56667 5.54 6.62 5.28 6.54667 5.04667C6.3 4.3 6.16667 3.5 6.16667 2.66667C6.16667 2.3 5.86667 2 5.5 2Z"
                  fill="currentColor"
                />
              </svg>
              Ligar
            </Button>
          </Card>
          <Card css={{ backgroundColor: 'transparent', padding: 0, gap: '$1' }}>
            <Text tabIndex={0} size="overline" color="$dark-light">
              assistente virtual{' '}
              <ButtonAccessible
                ghost
                videoId="5DxZ7-AyBQw"
                videoTitle="Assistente virtual"
              />
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              De segunda a sexta-feira, das 8h às 20h. Aos sábados, das 9h às
              18h.
            </Text>
            <Button variant="ghost" css={{ gap: '$2', alignSelf: 'normal' }}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_341780:1126)">
                  <path
                    d="M8.5 2C9.6 2 10.5 2.9 10.5 4C10.5 5.1 9.6 6 8.5 6C7.4 6 6.5 5.1 6.5 4C6.5 2.9 7.4 2 8.5 2ZM8.5 12C11.2 12 14.3 13.29 14.5 14H2.5C2.73 13.28 5.81 12 8.5 12ZM8.5 0C6.29 0 4.5 1.79 4.5 4C4.5 6.21 6.29 8 8.5 8C10.71 8 12.5 6.21 12.5 4C12.5 1.79 10.71 0 8.5 0ZM8.5 10C5.83 10 0.5 11.34 0.5 14V16H16.5V14C16.5 11.34 11.17 10 8.5 10Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_341780:1126">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Fale conosco
            </Button>
          </Card>
          <Card css={{ backgroundColor: 'transparent', padding: 0, gap: '$1' }}>
            <Text tabIndex={0} size="overline" color="$dark-light">
              E-mail{' '}
              <ButtonAccessible
                ghost
                videoId="EzD2ua_Z78A"
                videoTitle="E-mail"
              />
            </Text>
            <Text
              tabIndex={0}
              size="bodyMediumStandard"
              color="$medium-light-1"
            >
              De segunda a sexta-feira, das 8h às 20h. Aos sábados, das 9h às
              18h.
            </Text>
            <Button variant="ghost" css={{ gap: '$2', alignSelf: 'normal' }}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50065 1.3335C4.82065 1.3335 1.83398 4.32016 1.83398 8.00016C1.83398 11.6802 4.82065 14.6668 8.50065 14.6668H11.834V13.3335H8.50065C5.60732 13.3335 3.16732 10.8935 3.16732 8.00016C3.16732 5.10683 5.60732 2.66683 8.50065 2.66683C11.394 2.66683 13.834 5.10683 13.834 8.00016V8.9535C13.834 9.48016 13.3607 10.0002 12.834 10.0002C12.3073 10.0002 11.834 9.48016 11.834 8.9535V8.00016C11.834 6.16016 10.3407 4.66683 8.50065 4.66683C6.66065 4.66683 5.16732 6.16016 5.16732 8.00016C5.16732 9.84016 6.66065 11.3335 8.50065 11.3335C9.42065 11.3335 10.2607 10.9602 10.8607 10.3535C11.294 10.9468 12.0407 11.3335 12.834 11.3335C14.1473 11.3335 15.1673 10.2668 15.1673 8.9535V8.00016C15.1673 4.32016 12.1807 1.3335 8.50065 1.3335ZM8.50065 10.0002C7.39398 10.0002 6.50065 9.10683 6.50065 8.00016C6.50065 6.8935 7.39398 6.00016 8.50065 6.00016C9.60732 6.00016 10.5007 6.8935 10.5007 8.00016C10.5007 9.10683 9.60732 10.0002 8.50065 10.0002Z"
                  fill="currentColor"
                />
              </svg>
              Enviar e-mail
            </Button>
          </Card>
        </Flex>
      </Container>
      <Separator />
      <Footer />
    </>
  )
}

export default Home
