import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { config } from '@config/config'
import { env } from '@config/browser.env'

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
