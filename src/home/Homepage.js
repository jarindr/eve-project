import Masonry from 'react-masonry-component'
import React from 'react'
import { withRouter } from 'react-router'

import data from './artBoxesData'
import styles from './HomePage.styl'
import ImageSwitcher from '../components/ImageSwitcher'
import NavBar from './NavBar'

const GridItem = React.createClass({
  propTypes: {
    imageCover: React.PropTypes.string,
    imageHover: React.PropTypes.string,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    router: React.PropTypes.shape({
      push: React.PropTypes.func
    }),
    link: React.PropTypes.string
  },
  onClickNavigate (path) {
    console.log(this.props)
    return () => this.props.router.push(path)
  },
  render () {
    return (
      <div className={styles.box} onClick={this.onClickNavigate(this.props.link)} style={{width: this.props.width, height: this.props.height, margin: '10px'}} >
        <ImageSwitcher
          imageCover={this.props.imageCover}
          imageHover={this.props.imageHover}
          width={this.props.width}
          height={this.props.height}
          />
      </div>
    )
  }
})
const HomePage = React.createClass({
  getInitialState () {
    return {
      showType: 'all'
    }
  },
  changeShowType (showType) {
    this.setState({showType})
  },
  renderItems () {
    return data
    .filter((x) => (this.state.showType === 'all' || x.type === this.state.showType))
    .map((x, index) => (
      <GridItem
        imageCover={x.cover}
        imageHover={x.hover}
        width={x.width}
        height={x.height}
        key={x.key}
        link={x.link}
        {...this.props}
      />
    )
  )
  },
  render () {
    return (
      <div className={styles.container}>
        <NavBar
          onChangeShowType={this.changeShowType}
          />
        <div className={styles.row}>
          <Masonry>
            {this.renderItems()}
          </Masonry>
        </div>
      </div>
    )
  }
})
export default withRouter(HomePage)
