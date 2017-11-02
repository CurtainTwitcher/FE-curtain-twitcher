import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleChangeReverse = (value) => {
    this.setState({
      reverseValue: value
    })
  }

  render () {
    const { value } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-horizontal'>
            <Slider
              min={0.25}
              max={5}
              step={0.25}
              value={value}
              orientation='horizontal'
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Horizontal;