import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/whoschasingwhoresize.gif')}
]
const Page = React.createClass({
  render () {
    return (
      <DetailPage
        imageCatagory={require('./assets/name10.png')}
        imageArray={dataSlide}
      >
        <b>asdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdas dasasdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdasdasasdasdasdasdas</b>
      </DetailPage>
    )
  }
})

export default Page
