import React from 'react'

import DetailPage from '../components/DetailPage'

const dataSlide = [
  {name: '', image: require('./assets/1_copy.jpg')},
  {name: '', image: require('./assets/2_copy.jpg')},
  {name: '', image: require('./assets/3_copy.jpg')},
  {name: '', image: require('./assets/4_copy.jpg')},
  {name: '', image: require('./assets/5_copy.jpg')},
  {name: '', image: require('./assets/6_copy.jpg')},
  {name: '', image: require('./assets/8_copy.jpg')},
  {name: '', image: require('./assets/9_copy.jpg')},
  {name: '', image: require('./assets/10_copy.jpg')},
  {name: '', image: require('./assets/11.jpg')},
  {name: '', image: require('./assets/12_crop.jpg')}
]

const Page = React.createClass({
  render () {
    return (
      <DetailPage {...this.props}
        imageCatagory={require('./assets/name5.png')}
        imageArray={dataSlide}
      >
        <b>
          To learn how to draw, kids have mindsets by the outlined rules, you may notice from the colouring book or the cartoon character which somehow
          give them the impression in order to create a figure, you’ll need to draw the outline.
          For me, your sky doesn't have to look like mine, I don’t want to force any kid to draw exactly the way i did by creating the outline for them to
          fill colour in so i use water-colour as a tool for kid to paint their own story helping the little spider back home. Along the way of bringing little
          spider back home, kids will also have to observe natural order in their daily life such as rain and reflection and mimicking their own rain by using the
          sponge which is already prepared in the book  to soak into water-colour they want and tilting the paper in order to make the rain fall on embossing paper i made.
          <br />This project has been featured on samorapoom idea tv program, 2014
        </b>
      </DetailPage>
    )
  }
})

export default Page
