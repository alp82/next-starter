import React from 'react'
import { NextFunctionComponent } from 'next'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import { useSearch } from '../store'

const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

const Loading = styled.p`
  animation: ${bounce} 0.18s infinite ease-in-out alternate;
`

const SearchResults: NextFunctionComponent = (): JSX.Element => {
  const { isPending, results } = useSearch()

  return (
    <>
      {isPending && (
        <Loading>Loading...</Loading>
      )}
      {results.map(result => (
        <img className="search-result-gif" key={result} src={result} />
      ))}
      {!results.length && !isPending && (
        <p>
          <small>Nothing to show</small>
        </p>
      )}
    </>
  )
}

export default SearchResults
