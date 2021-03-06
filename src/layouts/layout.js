import './Layout.global.styl'

import Helmet from 'react-helmet'
import React from 'react'

import TopNav from '../components/TopNav'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle='eve baker'
          script={[
            {innerHTML: require('raw!../FontLoader.js'), 'type': 'text/javascript'}
          ]}
          link={[
            {'rel': 'shortcut icon', 'href': require('../components/assets/แทนรูปตรงช่องใส่เว็บ.png')}
          ]}
          meta={[
          ]}
        />
        <div style={{marginTop: '30px'}}>
          <TopNav />
            {this.props.children}
        </div>
      </div>
    )
  }
})

export default Layout
