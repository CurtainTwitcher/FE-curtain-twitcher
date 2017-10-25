import React from 'react';
import crimes from "../helpers/chartDataCreator";
const crimesType = Object.keys(crimes)
const CrimeList = () => {
  console.log(crimes, 'hello')
  return(
    <div>
      <ul>
      {crimesType.map(crime => {
        return(

          <li>{crime}</li>
          
        )
      })} 
      </ul>
      
    </div>
  )
}

export default CrimeList;