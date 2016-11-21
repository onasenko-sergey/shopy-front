import React, { PropTypes } from 'react'
import './SearchBar.scss'
import Collapse from 'react-bootstrap/lib/Collapse'
import SearchBarForm from '../../../../forms/SearchBar'

const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
}

const SearchBar = ({ isOpened, closeSearch, search }) => (
  <Collapse in={isOpened}>
    <div className='search-bar'>
      <SearchBarForm
        onSubmit={data => { if (data.search) return search(data.search) }}
        onReset={closeSearch}
      />
    </div>
  </Collapse>
)

SearchBar.propTypes = propTypes
export default SearchBar
