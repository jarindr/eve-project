import React from 'react'

import styles from './ImageSwitcher.styl'

const ImageSwitcher = React.createClass({
  propTypes: {
    imageCover: React.PropTypes.string,
    imageHover: React.PropTypes.string,
    coverWidth: React.PropTypes.string
  },
  render () {
    return (
      <div className={styles.container}>
        <img src={this.props.imageCover} className={styles.image} style={{width: this.props.width, height: this.props.height}} />
        <img src={this.props.imageHover} className={styles.image} style={{width: this.props.width, height: this.props.height}} />
      </div>
    )
  }
})

export default ImageSwitcher
