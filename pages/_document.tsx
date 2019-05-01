// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React, { ReactNode } from 'react'
import Document, { NextDocumentContext, DefaultDocumentIProps , RenderPageResponse, Html, Head, Main, NextScript} from 'next/document'
import { css, Global } from '@emotion/core'

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext): Promise<DefaultDocumentIProps> {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = (): RenderPageResponse =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        enhanceApp: App => App,
        // useful for wrapping in a per-page basis
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        enhanceComponent: Component => Component
      })

    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): ReactNode {
    return (
      <Html>
        <Global
          styles={css`
            html,
            body {
              padding: 3rem 1rem;
              margin: 0;
              background: papayawhip;
              min-height: 100%;
              font-family: Helvetica, Arial, sans-serif;
              font-size: 24px;
            }
          `}
        />
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument