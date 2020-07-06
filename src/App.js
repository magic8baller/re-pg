import React from 'react'
import tw, { css } from 'twin.macro'
import { Theme, Button, Logo, Header } from './components'
import { Container } from '@calculator'
import Form from './components/form'
import 'tailwindcss/dist/base.min.css'

const App = () => (
  <Theme>
    <Header />
    <div
      css={[
        tw`flex flex-col items-center justify-center`,
        /* Combine regular css and tailwind styles within backticks */
        css`
          background: linear-gradient(#fff1, #0058);
          ${tw`h-screen`}
        `
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Container />
        <Form />
      </div>
    </div>
  </Theme>
)

export default App
