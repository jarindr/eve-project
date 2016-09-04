import FlipMove from 'react-flip-move'
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
      <div style={{display: 'inline-block', width: '33.33%'}}>
        <ImageSwitcher
          imageCover={this.props.imageCover}
          imageHover={this.props.imageHover}
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
    .filter((x) => (this.state.showType === 'all' || x.type === this.state.showType ))
    .map((x, index) => (
      <GridItem
        imageCover={x.cover}
        imageHover={x.hover}
        key={x.index}
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
        <FlipMove>
          {this.renderItems()}
        </FlipMove>
      </div>
    </div>
  )
}
})
export default HomePage
