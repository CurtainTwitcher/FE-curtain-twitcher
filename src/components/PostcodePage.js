import React from "react";


class PostcodePage extends React.Component {
  render () {
    return(
      <div>
        <h1>POSTCODE</h1>
        <section className="GoogleMap">
          <h3>Google Map</h3>
        </section>
        <section className="CrimesList">
          <h3>Crime List</h3>
        </section>
        <section className="Crime Graph">
          <h3>Crime Graph</h3>
        </section>
      </div>
    ) 

  }

}

export default PostcodePage;