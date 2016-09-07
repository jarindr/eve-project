import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/01.png')},
  {name: '', image: require('./assets/2.png')},
  {name: '', image: require('./assets/3.jpg')},
  {name: '', image: require('./assets/4.png')},
  {name: '', image: require('./assets/5.jpg')},
  {name: '', image: require('./assets/6.jpg')},
  {name: '', image: require('./assets/7.jpg')},
  {name: '', image: require('./assets/8.jpg')},
  {name: '', image: require('./assets/9.png')},
  {name: '', image: require('./assets/10.png')},
  {name: '', image: require('./assets/11.jpg')},
  {name: '', image: require('./assets/12.png')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name3.png')}
        imageArray={dataSlide}
      >
        <b>
          For some people, it best to experience the truth with their own eyes and best way to reveal facts is to do it without them expecting it. That is why i created a template of everyday objects that are used in food offerings to monk activity at Suan Mock, Bangkok. It is used by people in order to tell the facts to these to people who seem to think that it was no big deal along with the faith they have towards Buddhism.<br />
          By painting them a big picture of their own actions, I’m using shared spoons, dishes, tablecloths and even make use of the perspective of how people seeing chair when they walk pass by and turn those object into facts-teller object.<br />
          For instance, all the food people bring will be categorized by using shared spoons to indicate the risks those monks will get if they take those food. If during that day people bring oily food or coconut milk
          (these kinds of food are easy to find in Bangkok and it is one of the big items for Buddhist practitioners to offer food to monks) which turns out to be one of the main reason why monks suffer from hypertension nowadays.
          Those dishes have to be labeled using a red shared spoon. FYI : Buddhist monks cannot request or deny any food they were given because they cannot cook themselves a meal.<br />
          So instead of me telling these people what to do or what to not do, when everyone who attend the event that day, look at the bigger picture by seeing the frequency of a red spoon.
          They will know immediately that the amount of oily food that were brought that day are too much for monks (who are also human too) to eat it and feel ok. By knowing this fact might help them rethink the next time they want to offer unhealthy food.
        </b>
      </DetailPage>
    )
  }
})

export default Page
