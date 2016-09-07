import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/001_crop.jpg')},
  {name: '', image: require('./assets/2.jpeg')},
  {name: '', image: require('./assets/3_copy.jpg')},
  {name: '', image: require('./assets/4_copy.jpg')},
  {name: '', image: require('./assets/5.jpg')},
  {name: '', image: require('./assets/6_crop.jpg')},
  {name: '', image: require('./assets/7_crop.jpg')},
  {name: '', image: require('./assets/8_crop.jpg')},
  {name: 'featured on Kult #18 OBSERVATION', image: require('./assets/9_crop.jpg')},
  {name: '', image: require('./assets/10_crop.jpg')},
  {name: '', image: require('./assets/11_crop.jpg')},
  {name: '', image: require('./assets/12_copy.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage
        imageCatagory={require('./assets/name7.png')}
        imageArray={dataSlide}
      >
        <b>MISSING TEXT HERE</b>
      </DetailPage>
    )
  }
})

export default Page
