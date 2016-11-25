import React, { Component, PropTypes } from 'react'
import CollectionGrid from './CollectionGrid'

export default function (configuration) {
  return function (ComposedComponent) {
    class CollectionGridHOC extends Component {
      getCollectionGridInstance () {
        if (!this.props.withRef) return null
        return this.refs.wrappedInstance
      }

      render () {
        const { withRef } = this.props
        return (
          <CollectionGrid
            {...configuration}
            {...this.props}
            ref={withRef ? 'wrappedInstance' : null}
          >
            <ComposedComponent />
          </CollectionGrid>
        )
      }
    }

    CollectionGridHOC.propTypes = {
      withRef: PropTypes.bool
    }
    return CollectionGridHOC
  }
}
