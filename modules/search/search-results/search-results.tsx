import React from 'react'
import { NextFunctionComponent } from 'next'

import { useSearch } from '../store'

const SearchResults: NextFunctionComponent = (): JSX.Element => {
  const { isPending, results } = useSearch()

  return (
    <>
      {isPending && (
        <p>Loading...</p>
      )}
      {results.length ? results.map(result => (
        <img className="search-result-gif" key={result} src={result} />
      )) : (
        <p>
          <em>Nothing to show</em>
        </p>
      )}
    </>
  )
}

export default SearchResults
