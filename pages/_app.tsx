import React, { ReactNode } from 'react'
import App, { Container, NextAppContext, DefaultAppIProps } from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext): Promise<DefaultAppIProps> {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render(): ReactNode {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp