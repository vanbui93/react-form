import React, { Component } from 'react'

export default class Result extends Component {
  setStyle = () => {
    return { 
      color: this.props.color ,
      fontSize: this.props.fontSize
    }
  }
  render() {
    return (
      <div className="row">
      <div className="container">
        <p>Color <span>red</span>-<span>font-size: { this.props.fontSize }px</span></p>
        <div className="card">
          <div className="card-body" style={ this.setStyle() }>
            This is some text within a card body.
          </div>
        </div>
      </div>
    </div>
    )
  }
}
