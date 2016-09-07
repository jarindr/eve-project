import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/BAATTTTT.png')},
  {name: '', image: require('./assets/HHHHHH.png')},
  {name: '', image: require('./assets/SSSSS.png')},
  {name: '', image: require('./assets/SSSSSDDD.png')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name8.png')}
        imageArray={dataSlide}
      >
        <b>
          You will never know what you’ll miss when your phone battery dies <br />
          and that is the reason why I make sure you never miss a thing by creating an app that help you find places or people nearby
          that are willing to help you charge your phone right before it dies and in return gives back benefits to those who help people in need
          such as internet accessibility and even monetary rewards.
        </b>
      </DetailPage>
    )
  }
})

export default Page
