import React, { Component } from 'react'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state ={
      colors : ['red','green','blue','#ccc']
    }
  }

  showColors = (color) => {
    return {
      backgroundColor: color
    }
  }

  setActiveColor = (color) => {
    this.props.onReciveColor(color)
    
  }
  
  render() {
    var elmColors = this.state.colors.map((color,index) => {
      return <span 
                key={index} 
                style={ this.showColors(color)}
                className={this.props.color === color ? 'active' : ''}
                onClick={() => this.setActiveColor(color)}
              ></span>
    })
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header">
            Color picker
          </div>
          <div className="card-body">
            {elmColors}
          </div>
        </div>
      </div>
    )
  }
}
