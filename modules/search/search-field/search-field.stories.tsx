import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchField from './search-field'

storiesOf('SearchField', module)
  .add('empty', () => {
    return <SearchField onQueryChange={action('query changed')} />
  })