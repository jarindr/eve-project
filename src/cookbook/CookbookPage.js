import DetailPage from '../components/DetailPage'
import React from 'react'

const dataSlide = [
  {name: '', image: require('./assets/1.png')},
  {name: '', image: require('./assets/2.png')},
  {name: '', image: require('./assets/3.png')},
  {name: '', image: require('./assets/4.png')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/cookbook.gif')}
        imageArray={dataSlide}
      >
        <b>
          Sneak peek of drawing paper plates I made for styling Hana’s baking.
          The cook book will be launched in December. <br />Stay tuned !
        </b>
      </DetailPage>
    )
  }
})

export default Page
