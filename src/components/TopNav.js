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
  renderInformation () {
    if (window.location.pathname !== '/information/') {
      return (
        <img src={require('./assets/information.png')} className={styles.information} onClick={this.onClick('/information/')} />
      )
    } else {
      return (
        <img src={require('../home/assets/infoเวลากดหน้าinfo.png')} className={styles.information} onClick={this.onClick('/information/')} />
      )
    }
  },
  render () {
    return (
      <div className={styles.container}>
        <img src={require('../home/assets/eb final.png')} className={styles.logo} onClick={this.onClick('/')} />
        {this.renderInformation()}
      </div>
    )
  }
})

export default withRouter(TopNav)
