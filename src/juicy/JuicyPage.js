import DetailPage from '../components/DetailPage'
import React from 'react'

const dataSlide = [
  {name: '', image: require('./assets/APPLE.png')},
  {name: '', image: require('./assets/LEMON.png')},
  {name: '', image: require('./assets/LIME.png')},
  {name: '', image: require('./assets/PEACH.png')},
  {name: '', image: require('./assets/RAMBUTAN.png')},
  {name: '', image: require('./assets/REDDRAGON.png')},
  {name: '', image: require('./assets/avocado.png')},
  {name: '', image: require('./assets/banana.png')},
  {name: '', image: require('./assets/cherry.png')},
  {name: '', image: require('./assets/durian.png')},
  {name: '', image: require('./assets/watermelon.png')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/juicy.gif')}
        imageArray={dataSlide}
      >
        <b></b>
      </DetailPage>
    )
  }
})

export default Page
