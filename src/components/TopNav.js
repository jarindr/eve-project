import React from 'react'

import styles from './TopNav.styl'

const TopNav = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <img src={require('../home/assets/eb final.png')} className={styles.logo} />
      </div>
    )
  }
})

export default TopNav
