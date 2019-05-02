import React from 'react'
import PropTypes from 'prop-types'
import { NextFunctionComponent, NextContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  userAgent?: string
}

const About: NextFunctionComponent<Props> = ({ userAgent }): JSX.Element => (
  <main>
    <Head>
      <title key="title">about | next-starter</title>
    </Head>
    <h1>About next-starter</h1>
    <h2>This next.js starter kit includes:</h2>
    <ul>
      <li>typescript</li>
      <li>eslint</li>
      <li>prettier</li>
      <li>emotion</li>
      <li>immer</li>
      <li>jest</li>
      <li>cypress</li>
      <li>storybook</li>
      <li>husky</li>
    </ul>
    <p>Your user agent: {userAgent}</p>
    <Link href="/">
      <a>back</a>
    </Link>
  </main>
)

About.propTypes = {
  userAgent: PropTypes.string
}

About.getInitialProps = ({ req }: NextContext): Props => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default About
