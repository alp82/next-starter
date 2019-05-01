import React from 'react'
import PropTypes from 'prop-types'
import { NextFunctionComponent } from 'next'

type Props = {
  onQueryChange?: Function
}

const SearchField: NextFunctionComponent<Props> = ({ onQueryChange }): JSX.Element => {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value
    if (typeof onQueryChange === 'function') {
      onQueryChange({ query })
    }
  }
  
  return (
    <div>
      <input
        className="search-field"
        type="search"
        placeholder="search for something"
        onChange={onSearchChange}
      />
    </div>
  )
}

SearchField.propTypes = {
  onQueryChange: PropTypes.func
}

SearchField.defaultProps = {
  onQueryChange: () => {}
}

export default SearchField
