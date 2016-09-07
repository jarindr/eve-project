import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/01_crop.jpg')},
  {name: '', image: require('./assets/02_crop.jpg')},
  {name: '', image: require('./assets/03_crop.jpg')},
  {name: '', image: require('./assets/04_crop.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name1.png')}
        imageArray={dataSlide}
      >
        <b>I was assigned to interpret one of the most famous Japanese legendary in my own words by adapting the story in the past with
          the present one or with any common sense that anyone could relate with it easily. Also, adding humours is one of my techniques,
           for example ; if we are going to chop bamboos’ trunks, we might do in the style we called  “Bamboo Ninja” (mocked from “Fruit Ninja”),
           or even the beauty of princess Kaguya might gain enormous likes as the same as instagram application
        </b>
      </DetailPage>
    )
  }
})

export default Page
