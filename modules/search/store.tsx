import React from 'react'

import createStore from '../../app/store/createStore'

interface UseSearch {
  query: string
  isPending: boolean
  results: string[]
  setQuery: Function
  setIsPending: Function
  setResults: Function
}

// interface SearchStore {
//   query: string
//   pending: boolean
//   results: string[]
// }

const initialValue = {
  isPending: false,
  results: [],
}

const { useStore, Provider, withProvider } = createStore()

export const useSearch = (): UseSearch => {
  const { useValue } = useStore()
  const [query, setQuery] = useValue<string>('query')
  const [isPending, setIsPending] = useValue<boolean>('isPending')
  const [results, setResults] = useValue<string[]>('results')
  return {
    query,
    setQuery,
    isPending,
    setIsPending,
    results,
    setResults,
  }
}

export const SearchProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <Provider initialValue={initialValue}>{children}</Provider>
)

export const withSearchProvider = (ComposedComponent: React.ElementType): Function => (
  withProvider(ComposedComponent, { initialValue })
)
