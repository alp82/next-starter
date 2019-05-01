import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import SearchResults from './search-results'
import { useSearch, SearchProvider } from '../store'

const exampleResults = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALklEQVR42u3OQREAAAjDsM2/aMAFn/QqIJ3k/qsAAAAAAAAAAAAAAAAAAADfgAWlvj/hJQLwQgAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVR42u3OMQEAAAjDMOZfNOBiT1oDyexfLAAAAAAAAAAAAAAAAAAAAG3AAYXeP+FHUlURAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALElEQVR42u3OMQEAAAwCIO0feovhAwlocpehCggICAgICAgICAgICAgIrAMPZf4/4fUBWOEAAAAASUVORK5CYII=',
]

storiesOf('SearchResults', module)
  .addDecorator(getStory => <SearchProvider>{getStory()}</SearchProvider>)
  .add('none', () => {
    return <SearchResults />
  })
  .add('with results', () => {
    const WithResults = () => {
      const { setResults } = useSearch()
      setResults(exampleResults)
      return <SearchResults />
    }
    return <WithResults />
  })
  .add('is pending', () => {
    const IsPending = () => {
      const { setIsPending } = useSearch()
      setIsPending(boolean('Pending', true))
      return <SearchResults />
    }
    return <IsPending />
  })
  .add('is pending with results', () => {
    const IsPendingWithResults = () => {
      const { setIsPending, setResults } = useSearch()
      setIsPending(boolean('Pending', true))
      setResults(exampleResults)
      return <SearchResults />
    }
    return <IsPendingWithResults />
  })
