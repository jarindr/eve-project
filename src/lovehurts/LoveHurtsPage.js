import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/IMG_0828.JPG')},
  {name: '', image: require('./assets/IMG_0848.JPG')},
  {name: '', image: require('./assets/IMG_8980.JPG')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name2.png')}
        imageArray={dataSlide}
      >
        <b>
          Not everyone deals with break up the same way so there should be the exact need for anyone out there who have been through heart broken.
          Shock and Denial, Pain and Guilt, Anger and Bargaining, Depression or Acceptance and Upward Turn. No matter what state you are in or your beloved ones,
          /'Love Hurts/’ chocolate pills will help you through those times. The primary part of the packaging was meant to deliver the message on how heartbroken
          people really feel right now because they tend to act like they are fine when the truth is, they are not. The secondary packaging is for
          labelling the type of chocolate pill and instructions
        </b>
      </DetailPage>
    )
  }
})

export default Page
