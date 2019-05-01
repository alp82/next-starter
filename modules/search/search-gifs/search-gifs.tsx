import React, { useEffect } from 'react'
import { NextFunctionComponent } from 'next'

import useDebounce from '../../../app/hooks/useDebounce'
import { searchGifs } from '../api'
import { withSearchProvider, useSearch } from '../store'
import SearchField from '../search-field'
import SearchResults from '../search-results'

interface QueryChangeProps {
  query: string
}

const SearchGifs: NextFunctionComponent = (): JSX.Element => {
  const { query, setQuery, setIsPending, setResults } = useSearch()
  const debouncedQuery = useDebounce(query, 300)

  const queryChange = ({ query }: QueryChangeProps): void => {
    setIsPending(true)
    setQuery(query)
  }

  useEffect(
    () => {
      if (debouncedQuery) {
        searchGifs({ query })
          .then((response) => {
            setIsPending(false)
            const gifs = response.results.map((item) => item.media[0].tinygif.url)
            setResults(gifs)
          })
      } else {
        setIsPending(false)
        setResults([])
      }
    },
    [debouncedQuery] // Only call effect if debounced search term changes
  )

  return (
    <>
      <SearchField onQueryChange={queryChange} />
      <SearchResults />
    </>
  )
}

export default withSearchProvider(SearchGifs)
