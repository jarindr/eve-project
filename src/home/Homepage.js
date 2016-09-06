import FlipMove from 'react-flip-move'
import Masonry from 'react-masonry-component'
import React from 'react'

import data from './artBoxesData'
import styles from './HomePage.styl'
import ImageSwitcher from '../components/ImageSwitcher'
import NavBar from './NavBar'

const GridItem = React.createClass({
  propTypes: {
    imageCover: React.PropTypes.string,
    imageHover: React.PropTypes.string
  },
  render () {
    return (
      <div className={styles.box} style={{width: this.props.width, height: this.props.height, margin: this.props.key==0 ? 0 : '10px'}} >
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
export default HomePage
