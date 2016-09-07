import React from 'react'
import {withRouter} from 'react-router'

import styles from './TopNav.styl'

const TopNav = React.createClass({
  propTypes: {
    router: React.PropTypes.any
  },
  onClick (route) {
    return () => this.props.router.push(route)
  },
  render () {
    return (
      <div className={styles.container}>
        <img src={require('../home/assets/eb final.png')} className={styles.logo} onClick={this.onClick('/')} />
        <img src={require('../home/assets/infoเวลากดหน้าinfo.png')} className={styles.information} onClick={this.onClick('/information/')} />
      </div>
    )
  }
})

export default withRouter(TopNav)
