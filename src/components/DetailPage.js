import '../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../node_modules/slick-carousel/slick/slick.css'

import React from 'react'
import Slider from 'react-slick'

import styles from './DetailPage.styl'

const LeftNavButton = React.createClass({
  render () {
    return <img src={require('./assets/arrow2.png')} className={styles.prev} {...this.props} />
  }
})
const RightNavButton = React.createClass({
  render () {
    return <img src={require('./assets/arrow1.png')} className={styles.prev} {...this.props} />
  }
})
const DetailPage = React.createClass({
  propTypes: {
    imageCatagory: React.PropTypes.string,
    children: React.PropTypes.node,
    imageArray: React.PropTypes.array
  },
  renderItems () {
    return this.props.imageArray.map((x, i) => {
      return (
        <div key={i}><img src={x.image} className={styles.imageSlide} /> <div className={styles.imageName}>{x.name}</div> </div>
      )
    })
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.imageWork}>
          <img src={this.props.imageCatagory} />
        </div>
        <div className={styles.navigation}>
          <img src={require('./assets/previous.png')} className={styles.prev} />
          <img src={require('./assets/next.png')} className={styles.next} />
        </div>
        <div className={styles.detail}>
          {this.props.children}
        </div>
        <div className={styles.sliderContainer}>
          <Slider
            nextArrow={<LeftNavButton />}
            prevArrow={<RightNavButton />}
          >
          {this.renderItems()}
          </Slider>
        </div>
      </div>
    )
  }
})


export default DetailPage
