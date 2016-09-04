import React from 'react'

import styles from './ImageSwitcher.styl'

class ImageSwitcher extends React.Component {

  render () {
    return (
      <div className={styles.container}>
        <img src={this.props.imageCover} className={styles.image} />
        <img src={this.props.imageHover} className={styles.image} />
      </div>
    )
  }
}

export default ImageSwitcher
