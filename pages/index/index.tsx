import React from 'react'
import { NextFunctionComponent } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import SearchGifs from '../../modules/search/search-gifs'

const Home: NextFunctionComponent = (): JSX.Element => (
  <main>
    <Head>
      <title key="title">welcome | next-starter</title>
    </Head>
    <h1>Welcome to next-starter</h1>
    <SearchGifs />
    <footer>
      <Link href="/about">
        <a>about</a>
      </Link>
    </footer>
  </main>
)

export default Home
