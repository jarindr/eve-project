import DetailPage from '../components/DetailPage'
import React from 'react'

const dataSlide = [
  {name: '', image: require('./assets/001_crop.jpg')},
  {name: '', image: require('./assets/2.jpeg')},
  {name: '', image: require('./assets/3_copy.jpg')},
  {name: '', image: require('./assets/4_copy.jpg')},
  {name: '', image: require('./assets/5.jpg')},
  {name: '', image: require('./assets/6_crop.jpg')},
  {name: '', image: require('./assets/7_crop.jpg')},
  {name: '', image: require('./assets/8_crop.jpg')},
  {name: 'featured in Kult #18 OBSERVATION', image: require('./assets/9_crop.jpg')},
  {name: '', image: require('./assets/10_crop.jpg')},
  {name: '', image: require('./assets/11_crop.jpg')},
  {name: '', image: require('./assets/12_copy.jpg')},
  {name: '<a href="https://www.instagram.com/her_mess_/?hl=en">https://www.instagram.com/her_mess_/?hl=en</a>', image: require('./assets/sticker.png')},
  {name: '', image: require('./assets/1.jpg')},
  {name: '', image: require('./assets/pear.jpg')},
  {name: '', image: require('./assets/thaithai.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name7.png')}
        imageArray={dataSlide}
      >
        <b></b>
      </DetailPage>
    )
  }
})

export default Page
