import React from 'react'
import PropTypes from 'prop-types'
import { NextFunctionComponent, NextContext } from 'next'

type Props = {
  statusCode?: number
  message?: string
}

const Error: NextFunctionComponent<Props> = ({ statusCode, message }): JSX.Element => (
  <>
    <p>
      {statusCode
        ? `An error with code ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
    <p>{message}</p>
  </>
)

Error.propTypes = {
  statusCode: PropTypes.number,
  message: PropTypes.string,
}

Error.getInitialProps = ({ res, err }: NextContext): Props => {
  const statusCode = res ? res.statusCode : undefined
  const message = (res ? res.statusMessage : undefined) || (err ? err.message : undefined)
  return { statusCode, message }
}

export default Error