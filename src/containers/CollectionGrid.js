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
  children: PropTypes.element.isRequired
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

    this.state = this.validateGrid(this.getDefaultGrid(props), props)

    this.resizeGrid = this.resizeGrid.bind(this)
    this.addRows = this.addRows.bind(this)
    this.reset = this.reset.bind(this)
  }

  /**
   * Get default grid.
   *
   * Find col and row grid params for current window width.
   * @param {{gridMap: object}} props
   * @returns {{col: number, row: number, quantity: number}}
   */
  getDefaultGrid (props) {
    const { gridMap } = props
    const width = window.innerWidth
    let { col, row } = Object
      .keys(gridMap)
      .reduce(
        (acc, cur) => (parseInt(cur) <= width ? gridMap[cur] : acc),
        { col: 1, row: 1 }
      )
    return { col, row, quantity: col * row }
  }

  /**
   * Check grid limitations.
   * @param {object} newGrid
   * @param {object} props
   * @returns {{col: number, row: number, quantity: number}}
   */
  validateGrid (newGrid, props) {
    let { col, row, quantity } = newGrid
    const { length } = props.collection
    // if collection items length is less then grid - shrink quantity and number of rows
    if (length < quantity) {
      quantity = length
      row = Math.ceil(quantity / col)
    }
    return { col, row, quantity }
  }

  /**
   * Set default grid params received from gridMap prop
   */
  reset () {
    this.setState((prevState, props) => this.validateGrid(this.getDefaultGrid(props), props))
  }

  /**
   * Add 'inc' rows
   * @param {?number} inc
   */
  addRows (inc = 1) {
    if (isNaN(inc) || (inc < 1)) return
    // if increment is assigned
    let { col, row } = this.state
    // increase current row count
    row += inc
    this.setState((prevState, props) => this.validateGrid({ col, row, quantity: col * row }, props))
  }

  /**
   * Update grid to fit new window width
   */
  resizeGrid () {
    const { col: dCol, row: dRow, quantity: dQuantity } = this.getDefaultGrid(this.props)
    const { col: cCol, quantity: cQuantity } = this.state
    // unless default col count equals current col count
    if (dCol === cCol) return
    // calculate new grid
    // if new number of columns or rows is 0, preserve current state quantity
    if (dCol === 0 || dRow === 0) {
      this.setState((prevState, props) => this.validateGrid({ col: 0, row: 0, quantity: cQuantity }, props))
    } else {
      let row = Math.ceil(cQuantity / dCol)
      if (dCol * row < dQuantity) {
        row = dRow
      }
      this.setState((prevState, props) => this.validateGrid({ col: dCol, row, quantity: dCol * row }, props))
    }
  }

  /**
   * Update quantity when collection changes
   */
  changeQuantity () {
    const { col: dCol, row: dRow, quantity: dQuantity } = this.getDefaultGrid(this.props)
    let { col, row } = this.state
    // if calculated grid is less then default grid declared for this width, use defaults
    if (col * row < dQuantity) {
      col = dCol
      row = dRow
    }

    this.setState((prevState, props) => this.validateGrid({ col, row, quantity: col * row }, props))
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeGrid)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeGrid)
  }

  componentWillUpdate (nextProps) {
    if (this.props.collection.length !== nextProps.collection.length) {
      // update quantity when collection changes
      this.changeQuantity()
    }
  }

  render () {
    return React.cloneElement(this.props.children, {
      ...this.props,
      ...this.state,
      addRows: this.addRows,
      reset: this.reset
    })
  }
}

CollectionGrid.propTypes = propTypes
CollectionGrid.defaultProps = defaultProps
export default CollectionGrid
