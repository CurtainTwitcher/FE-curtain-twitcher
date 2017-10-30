import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import dummy from "./graphDataDummy";

const newObj = {}
const crimeTypes =
  dummy
    .map(crime => crime.crimeType)
    .reduce((acc, crimeType) => {
      if (!(crimeType in acc)) acc[crimeType] = crimeType;
      return acc;
    }, {})

  console.log(crimeTypes, '11111')
  
  // "Burglary": "Burglary",
  // "Other theft": "Other theft"
  


const CrimeChartList = props => {
  return (
    <BootstrapTable data={dummy}  striped={true} hover={true} pagination={true} >
    <TableHeaderColumn isKey dataField="crimeType" filter={ { type: 'SelectFilter', options: crimeTypes }} >Crime Type{" "}</TableHeaderColumn>
      <TableHeaderColumn dataField="streetName">Street Name</TableHeaderColumn>
      <TableHeaderColumn dataField="month">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="outcome">Outcome</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default CrimeChartList;




//search={true} multiColumnSearch={true}

