import React from 'react'

import styles from './NavBar.styl'

const NavBar = React.createClass({
  propTypes: {
    onChangeShowType: React.PropTypes.func
  },
  onNavClick (e) {
    const id = e.currentTarget.id
    this.props.onChangeShowType(id)
  },
  render () {
    return (
      <nav className={styles.nav}>
        <img src={require('./assets/eb final.png')} className={styles.logo} />
        <ul>
          <li id='all' onClick={this.onNavClick}><img src={require('./assets/all.png')} height='30px' /></li>
          <li id='print' onClick={this.onNavClick}><img src={require('./assets/print.png')} height='30px' /></li>
          <li id='something' onClick={this.onNavClick} style={{marginTop: '-5px'}}><img src={require('./assets/something in between.png')} height='43px' /></li>
          <li id='product' onClick={this.onNavClick}><img src={require('./assets/product.png')} height='35px' /></li>
        </ul>
      </nav>
    )
  }
})

export default NavBar
