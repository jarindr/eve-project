import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: 'ab', image: require('./assets/00.jpg')},
  {name: 'cd', image: require('./assets/01.jpg')},
  {name: 'ef', image: require('./assets/02.jpg')},
  {name: 'gi', image: require('./assets/03.jpg')},
  {name: 'lm', image: require('./assets/04.jpg')},
  {name: 'no', image: require('./assets/05.jpg')}
]

const DeeDeePage = React.createClass({
  render () {
    return (
      <DetailPage
        imageCatagory={require('./assets/deedee.png')}
        imageArray={dataSlide}
      >
        <b>asdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdas dasasdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdasdas</b>
      </DetailPage>
    )
  }
})

export default DeeDeePage
