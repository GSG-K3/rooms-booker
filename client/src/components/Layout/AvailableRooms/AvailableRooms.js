import React, { Compnent } from 'react'

class AvailableRooms extends Compnent {
  constructor (props) {
    super(props)
    this.state = {
      availableRooms: []
    }
  }

  render () {
    return (
      <h1>Hello!</h1>
    )
  }
}

export default AvailableRooms
