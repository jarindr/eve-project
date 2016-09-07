import React from 'react'

import styles from './InformationPage.styl'

const InformationPage = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.info}>
          <b>Eve baker</b> is a creative/designer who works on multidisciplinary fields including graphic, branding, products and interactive design. Her works focusing on creating the magical experience to users.
          To Eve baker, everything is figureoutable including her phone number +66 819495879 and email <a href='mailto:evebaker.evebaker@gmail.com'>evebaker.evebaker@gmail.com</a> where you can
          chit chat for more info or collaboration. Look forward to hear from you soon xx
        </div>
        <div className={styles.imgContainer}>
          <img src={require('./assets/info page resize.png')} />
        </div>
      </div>
    )
  }
})

export default InformationPage
