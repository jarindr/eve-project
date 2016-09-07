import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: 'ab', image: require('./assets/friendlysuggestion.gif')},
  {name: 'ab', image: require('./assets/2_copy.jpg')},
  {name: 'ab', image: require('./assets/3_crop.jpg')},
  {name: 'ab', image: require('./assets/4_copy.jpg')},
  {name: 'ab', image: require('./assets/5_crop.jpg')},
  {name: 'ab', image: require('./assets/6_crop.jpg')},
  {name: 'ab', image: require('./assets/7_copy.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage
        imageCatagory={require('./assets/friendly suggestion.png')}
        imageArray={dataSlide}
      >
        <b>asdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdas dasasdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdasdas</b>
      </DetailPage>
    )
  }
})

export default Page
