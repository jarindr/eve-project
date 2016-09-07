import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/whoschasingwhoresize.gif')}
]
const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name10.png')}
        imageArray={dataSlide}
      >
        <b>a not so classic story.</b>
      </DetailPage>
    )
  }
})

export default Page
