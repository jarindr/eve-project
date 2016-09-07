import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/hangbag-new.gif')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage
        imageCatagory={require('./assets/name4.png')}
        imageArray={dataSlide}
      >
        <b>WHO WANTS THEIR BAG TO GET DIRTY … WELL NOT ME</b>
      </DetailPage>
    )
  }
})

export default Page
