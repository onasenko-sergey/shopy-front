import React, { PureComponent, PropTypes } from 'react'

const propTypes = {
  collection: PropTypes.array.isRequired,
  gridMap: PropTypes.objectOf(
    function (propValue, key, componentName, location, propFullName) {
      if (__DEV__) {
        // ckeck 'min-width'
        if (typeof key !== 'string') {
          return new Error('Invalid key `' + key + '` supplied to' + ' `' + componentName + '`. Validation failed.')
        }
        if (isNaN(parseInt(key))) {
          return new Error('Invalid key `' + key + '` supplied to' + ' `' + componentName + '`. Validation failed.')
        }
        // check 'col'
        /* eslint-disable eqeqeq */
        if (propValue[key].col == null) {
          return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName +
            '`. Col validation failed.')
        }
        /* eslint-enable eqeqeq */
        if (isNaN(propValue[key].col)) {
          return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName +
            '`. Col validation failed.')
        }
        if (propValue[key].col < 0) {
          return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName +
            '`. Col validation failed.')
        }
        // check 'row'
        /* eslint-disable eqeqeq */
        if (propValue[key].row == null) {
          return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName +
            '`. Row validation failed.')
        }
        /* eslint-enable eqeqeq */
        if (isNaN(propValue[key].row)) {
          return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName +
            '`. Row validation failed.')
        }
        if (propValue[key].row < 0) {
          return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName +
            '`. Row validation failed.')
        }
      }
    }
  ),
  component: PropTypes.func.isRequired,
  onComplete: PropTypes.func
}

const defaultProps = {
  gridMap: {
    // min-width: {col, row}
    '0': { col: 1, row: 1 }
  }
}

class CollectionGrid extends PureComponent {
  constructor (props) {
    super(props)

    this.resizeGrid = this.resizeGrid.bind(this)

    this.state = this.newGrid(null, props)
  }

  /**
   * Get default grid.
   *
   * Find col and row grid params for current window width.
   * @param {{gridMap: object}} props
   * @returns {{col: number, row: number}}
   */
  getDefaultGrid (props) {
    const { gridMap } = props
    const width = window.innerWidth
    return Object
      .keys(gridMap)
      .reduce(
        (acc, cur) => (parseInt(cur) <= width ? gridMap[cur] : acc),
        { col: 1, row: 1 }
      )
  }

  /**
   * Calculate new grid params.
   * @param {?object} prevState
   * @param {object} props
   * @param {?number} inc
   * @returns {?{col: number, row: number, quantity: number}}
   */
  newGrid (prevState, props, inc) {
    const { col: pCol, row: pRow, quantity: pQuantity } = prevState || {}
    const { col: dCol, row: dRow } = this.getDefaultGrid(props)
    const { length } = props.collection
    let col, row, quantity
    if (inc) {
      // if increment is assigned
      col = pCol
      // increase row count
      row = pRow + inc
    } else {
      // else
      if (!prevState) {
        // initial call
        col = dCol // set new col count to value received from
        row = dRow // props by means of gridMap
      } else {
        // resize
        if (dCol === pCol) return // unless default col count equals current col count
        // calculate new grid
        col = dCol
        // if new number of columns is 0 - set row to 0 and return previous state quantity
        if (col === 0) return { col, row: 0, quantity: pQuantity }
        if (pQuantity === 0) {
          // if previous state quantity is 0 use default number of rows
          row = dRow
        } else {
          // else find new row count
          row = Math.ceil(pQuantity / col)
        }
      }
    }
    // if calculated grid is less then default grid declared for this width, use defaults
    if (col * row < dCol * dRow) {
      col = dCol
      row = dRow
    }
    quantity = col * row // quantity is supposed to be a number of at least once displayed items
    // if collection length is less then grid - shrink quantity and number of rows
    if (length < quantity) {
      quantity = length
      row = Math.ceil(quantity / col)
    }
    // if number of displayed items reached collection length call onComplete callback
    if ((quantity === length) && (pQuantity !== length)) props.onComplete && props.onComplete()
    return { col, row, quantity }
  }

  /**
   * Add 'inc' rows
   * @param {number} inc
   */
  addRows (inc = 1) {
    if (isNaN(inc) || (inc < 1)) return
    this.setState((prevState, props) => this.newGrid(prevState, props, inc))
  }

  /**
   * Set default grid params received from gridMap prop
   */
  reset () {
    this.setState((prevState, props) => this.newGrid(null, props))
  }

  /**
   * Update grid to fit new window width
   */
  resizeGrid () {
    this.setState((prevState, props) => this.newGrid(prevState, props))
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeGrid)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeGrid)
  }

  render () {
    const { collection, component } = this.props
    const { col, row } = this.state
    const items = collection
      .slice(0, col * row)
      .map((item, i) => (component(item, i)))
    return (
      <div>{items}</div>
    )
  }
}

CollectionGrid.propTypes = propTypes
CollectionGrid.defaultProps = defaultProps
export default CollectionGrid
