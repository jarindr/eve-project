import React from 'react'

import ImageSwitcher from '../components/ImageSwitcher'

const ImageSwitcherInline = React.createClass({
  propTypes: {
    imageCover: React.PropTypes.string,
    imageHover: React.PropTypes.string
  },
  render () {
    return (
      <div style={{display: 'inline-block', width: '33.33%'}}>
        <ImageSwitcher
          imageCover={this.props.imageCover}
          imageHover={this.props.imageHover}
        />
      </div>
    )
  },
})

export default ImageSwitcherInline
