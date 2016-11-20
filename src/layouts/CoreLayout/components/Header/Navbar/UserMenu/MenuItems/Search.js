import React, { Component, PropTypes } from 'react'
import Icons from 'components/Icons'

const propTypes = {
  searchBar: PropTypes.object.isRequired,
  searchBarActions: PropTypes.objectOf(PropTypes.func).isRequired
}

class SearchItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    const { searchBar, searchBarActions } = this.props
    // when searchbar is opened, click on search menu icon leads to search form submit
    if (searchBar.isOpened) {
      window[searchBar.formRefSymbol].submit()
    } else {
      searchBarActions.openSearch()
    }
  }

  render () {
    const { searchBar } = this.props
    return (
      <li className='user-menu__item'>
        <a href='/search' onClick={this.handleClick}>
          <Icons.Search highlighted={searchBar.isOpened} />
        </a>
      </li>
    )
  }
}

SearchItem.propTypes = propTypes

export default SearchItem

