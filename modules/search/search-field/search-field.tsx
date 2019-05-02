import React from 'react'
import PropTypes from 'prop-types'
import { NextFunctionComponent } from 'next'
import styled from '@emotion/styled'

type Props = {
  onQueryChange?: Function
}

const Input = styled.input`
  padding: 0.2em;
  font-size: 1.2em;
  
  &:hover {
    border: 2px solid rgb(200, 200, 200);
  }
`

const SearchField: NextFunctionComponent<Props> = ({ onQueryChange }): JSX.Element => {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value
    if (typeof onQueryChange === 'function') {
      onQueryChange({ query })
    }
  }
  
  return (
    <div>
      <Input
        className="search-field"
        type="search"
        placeholder="search for gifs"
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
