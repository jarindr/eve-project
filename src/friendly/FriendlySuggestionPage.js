import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/friendlysuggestion.gif')},
  {name: 'some of the book I read to understand ‘Thai” even more', image: require('./assets/2_copy.jpg')},
  {name: 'some of the book I read to understand ‘Thai” even more', image: require('./assets/3_crop.jpg')},
  {name: 'witty words I came up with', image: require('./assets/4_copy.jpg')},
  {name: 'thai literature character I used on urn', image: require('./assets/5_crop.jpg')},
  {name: 'thai literature character i used on urn', image: require('./assets/6_crop.jpg')},
  {name: 'thai literature character I used on urn', image: require('./assets/7_copy.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name9.png')}
        imageArray={dataSlide}
      >
        <b>
          Seriously though, who say everything related to smoking has to be super dramatic, super emotional? And please, enough with
          making cigarette the bad guy already! We already know it, in fact, no one really care ( I’m being honest here ) Smokers feel pressured and stressed
          already ( based on research I did ) I have 0 intention to give them more stress. I want to have a conversation with humour instead !
          What I did by suggesting/nagging smokers is combining the ashtray which made to look just like traditional Thai urn with Thai wordplay to
          something else that less offensive and still fun to look at while still deliver the message such as I’d rather u have sex than smoking
          ( no kidding I suggest them that sucking cock is way better to suck than cigarettes ).
        </b>
      </DetailPage>
    )
  }
})

export default Page
