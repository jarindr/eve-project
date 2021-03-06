import React from 'react'
import {withRouter} from 'react-router'

import styles from './TopNav.styl'

const TopNav = React.createClass({
  propTypes: {
    router: React.PropTypes.any
  },
  getInitialState () {
    return {
      location: ''
    }
  },
  componentDidMount () {
    this.setState({location: window.location.pathname})
  },
  onClick (route) {
    return () => {
      this.props.router.push(route)
      this.setState({location: window.location.pathname})
    }
  },
  renderInformation () {
    if (this.state.location !== '/information/') {
      return (
        <img src={require('./assets/information.png')} className={styles.information} onClick={this.onClick('/information/')} />
      )
    } else {
      return (
        <img src={require('../home/assets/infoเวลากดหน้าinfo.png')} className={styles.information} onClick={this.onClick('/information/')} />
      )
    }
  },
  renderLogo () {
    if (this.state.location !== '/') {
      return (
        <img src={require('../home/assets/eb final.png')} className={styles.logo} onClick={this.onClick('/')} />
      )
    } else {
      return (
        <img src={require('../home/assets/eb final underline.png')} className={styles.logo} onClick={this.onClick('/')} />
      )
    }
  },
  render () {
    return (
      <div className={styles.container}>
        {this.renderLogo()}
        {this.renderInformation()}
      </div>
    )
  }
})

export default withRouter(TopNav)
