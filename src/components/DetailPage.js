import '../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../node_modules/slick-carousel/slick/slick.css'

import React from 'react'
import Slider from 'react-slick'
import {withRouter} from 'react-router'

import styles from './DetailPage.styl'

const routeArray = ['/deedee/', '/factsvsfaith/', '/friendly/', '/hangbag/', '/illustration/', '/lovehurts/', '/bamboo/', '/who/', '/outline/', '/battery/']

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
    imageArray: React.PropTypes.array,
    router: React.PropTypes.shape({
      push: React.PropTypes.func
    }),
    location: React.PropTypes.object
  },
  getIndexNavigate () {
    return routeArray.indexOf(this.props.location.pathname)
  },
  createMarkUp (x) {
    return {__html: x.name}
  },
  renderItems () {
    return this.props.imageArray.map((x, i) => {
      return (
        <div key={i} style={{height: '600px'}}><img src={x.image} className={styles.imageSlide} />
          <div className={styles.imageName} dangerouslySetInnerHTML={this.createMarkUp(x)} />
        </div>
      )
    })
  },
  onPrevClick () {
    let index = this.getIndexNavigate() - 1
    if (index < 0) {
      index = routeArray.length - 1
    }
    this.props.router.push(routeArray[index])
  },
  onNextClick () {
    let index = this.getIndexNavigate() + 1
    if (index > routeArray.length - 1) {
      index = 0
    }
    this.props.router.push(routeArray[index])
  },
  renderSlider () {
    if (this.renderItems().length > 1) {
      return (
        <Slider
          nextArrow={<LeftNavButton />}
          prevArrow={<RightNavButton />}
        >
        {this.renderItems()}
        </Slider>
      )
    } else {
      return (
        <div style={{textAlign: 'center'}}>
          {this.renderItems()}
        </div>
      )
    }
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.imageWork}>
          <img src={this.props.imageCatagory} />
        </div>
        <div className={styles.navigation}>
          <img src={require('./assets/previous.png')} className={styles.prev} onClick={this.onPrevClick} />
          <img src={require('./assets/next.png')} className={styles.next} onClick={this.onNextClick} />
        </div>
        <div className={styles.detail}>
          {this.props.children}
        </div>
        <div className={styles.sliderContainer}>
          {this.renderSlider()}
        </div>
      </div>
    )
  }
})

export default withRouter(DetailPage)
