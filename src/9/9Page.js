import DetailPage from '../components/DetailPage'
import React from 'react'

const dataSlide = [
  {name: '', image: require('./assets/01.jpg')},
  {name: '', image: require('./assets/02.jpg')},
  {name: '', image: require('./assets/03.jpg')},
  {name: '', image: require('./assets/04.jpg')},
  {name: '', image: require('./assets/05.jpg')},
  {name: '', image: require('./assets/06.jpg')},
  {name: '', image: require('./assets/07.jpg')},
  {name: '', image: require('./assets/08.jpg')},
  {name: '', image: require('./assets/09.jpg')},
  {name: '', image: require('./assets/10.jpg')},
  {name: '', image: require('./assets/11.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/9.gif')}
        imageArray={dataSlide}
      >
        <b>A eerie of 9 postcards inspired by his Majesty the King Rama9’s works during the whole 70-year reign.</b>
      </DetailPage>
    )
  }
})

export default Page
