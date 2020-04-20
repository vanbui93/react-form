import React, { Component } from 'react'

export default class Reset extends Component {

  resetDefault = () => {
    this.props.onResetDefault(true)
  }

  render() {
    return (
      <button className="btn btn-primary"onClick={ this.resetDefault }>Reset</button>
    )
  }
}
