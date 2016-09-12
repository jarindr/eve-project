import React from 'react'

import styles from './NavBar.styl'

const NavBar = React.createClass({
  propTypes: {
    onChangeShowType: React.PropTypes.func
  },
  getInitialState () {
    return {
      id: 'all'
    }
  },
  onNavClick (e) {
    const id = e.currentTarget.id
    this.props.onChangeShowType(id)
    this.setState({id})
  },
  renderAll () {
    return (
      <li id='all' onClick={this.onNavClick}>
        this.state.id === 'all' ? <img src={require('./assets/all.png')} height='30px' /> : <img src={require('./assets/all 2.png')} height='30px' />
      </li>
    )
  },
  render () {
    return (
      <nav className={styles.nav}>
        <ul>
          <li id='all' onClick={this.onNavClick}>
            {this.state.id === 'all' ? <img src={require('./assets/all.png')} height='30px' /> : <img src={require('./assets/all 2.png')} height='30px' />}
          </li>
          <li id='print' onClick={this.onNavClick}>
            {this.state.id === 'print' ? <img src={require('./assets/print.png')} height='30px' /> : <img src={require('./assets/print 2.png')} height='30px' />}
          </li>
          <li id='something' onClick={this.onNavClick} style={{marginTop: '-5px'}}>
            {this.state.id === 'something' ? <img src={require('./assets/something in between.png')} height='30px' /> : <img src={require('./assets/something inbetween.png')} height='43px' />}
          </li>
          <li id='product' onClick={this.onNavClick}>
            {this.state.id === 'product' ? <img src={require('./assets/product.png')} height='30px' /> : <img src={require('./assets/product 2.png')} height='30px' />}
          </li>
        </ul>
      </nav>
    )
  }
})

export default NavBar
