import React from 'react';
import axios from 'axios';

function fetchPostcodes(postcode) {
  axios.get(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => {
      console.log(response.result)
    })


}

export default fetchPostcodes;