import React, { Component } from 'react'

export default class SizeSetting extends Component {

  changeSize = (size) => {
    this.props.onChangeSize(size)
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-warning text-white">
          Size: { this.props.fontSize }px
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button className="btn btn-success mr-2" onClick = {() => this.changeSize(-2)}>Giảm</button>
          <button className="btn btn-success" onClick = {() => this.changeSize(+2)}>Tăng</button>
        </div>
      </div>
    )
  }
}
