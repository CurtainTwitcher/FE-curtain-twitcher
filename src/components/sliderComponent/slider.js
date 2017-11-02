import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class HorizontalSlider extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    // const { value } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-horizontal'>
            <Slider
              min={0.25}
              max={5}
              step={0.25}
              value={this.props.value}
              orientation='horizontal'
              onChange={this.props.getRadiusValue}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HorizontalSlider;