import React from 'react'
import './IntroText.css'

const IntroText = (props) => {
  return (
    <div className="container">
      <h2 className="whatwedo">What We Do</h2>
      <br />
      <p style={{textAlign:"centre"}}>Curtain Twitcher pulls together in-depth information about crimes and schools across the United Kingdom.
          With extra features in development we plan to show you everything you need to know about an area, whether you are looking to buy,
          rent or are just being a little bit of a curtain twitcher! 
          <br />
          Best of all, our service is completely free - just enter a postcode
          above to have a nosey about.</p>
    </div>
  )
}

export default IntroText;

