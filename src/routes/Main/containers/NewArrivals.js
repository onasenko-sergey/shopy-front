import React, { Component } from 'react'
import NewArrivals from '../components/NewArrivals'

class NewArrivals1 extends Component {
  constructor (props) {
    super(props)

    this.onComplete = this.onComplete.bind(this)

    this.state = {
      btnMoreHidden: false
    }
  }

  onComplete () {
    this.setState({ btnMoreHidden: true })
  }

  render () {
    const { btnMoreHidden } = this.state
    return (
      <NewArrivals
        {...this.props}
        btnMoreHidden={btnMoreHidden}
        onComplete={this.onComplete}
      />
    )
  }
}

export default NewArrivals1
