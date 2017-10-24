import React from "react";
import CrimeList from "./postcodeComponents/CrimeList";
import Graph from "./postcodeComponents/graph";
import Map from "./postcodeComponents/googleMap";



class PostcodePage extends React.Component {
  render () {
    return(
      <div>
        <h1>POSTCODE</h1>
        <section className="GoogleMap">
          <h1>map Map MAP</h1>
        </section>
        <section className="CrimesList">
          <CrimeList/>
        </section>
        <section className="Crime Graph">
          <Graph/>
        </section>
      </div>
    ) 

  }

}

export default PostcodePage;