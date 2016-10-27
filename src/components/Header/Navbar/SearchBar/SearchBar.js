import React, { Component, PropTypes } from 'react'
import './SearchBar.scss'
import Collapse from 'react-bootstrap/lib/Collapse'
import SearchBarForm from 'forms/SearchBar'

const propTypes = {
  setFormRef: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
}

class SearchBar extends Component {
  componentDidMount () {
    const { setFormRef } = this.props
    // save reference to search form in redux store
    setFormRef(this._searchForm)
  }

  componentWillUnmount () {
    const { setFormRef } = this.props
    setFormRef(null)
  }

  render () {
    const { isOpened, closeSearch, search } = this.props
    return (
      <Collapse in={isOpened}>
        <div className='search-bar'>
          <SearchBarForm
            onSubmit={data => { if (data.search) return search(data.search) }}
            onReset={closeSearch}
            ref={ref => { this._searchForm = ref }}
          />
        </div>
      </Collapse>
    )
  }
}

SearchBar.propTypes = propTypes
export default SearchBar
