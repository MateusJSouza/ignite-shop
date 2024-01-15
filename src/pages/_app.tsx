import type { AppProps } from 'next/app'
import Image from 'next/image'

import { Container, Header } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo do ignite shop" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
