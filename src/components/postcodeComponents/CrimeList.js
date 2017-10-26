import React from 'react';
import crimes from "../helpers/chartDataCreator";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import dummy from './graphDataDummy';

const qualityType = {
  0: 'good',
  1: 'Burglary',
  2: 'unknown'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

const CrimeChartList = (props) => {
  return (

    <BootstrapTable data={ dummy } search={ true } multiColumnSearch={ true }>
      <TableHeaderColumn isKey dataField='crimeType' >Crime Type </TableHeaderColumn>
      <TableHeaderColumn dataField='streetName'>Street Name</TableHeaderColumn>
      <TableHeaderColumn dataField='month'>Date</TableHeaderColumn>
      <TableHeaderColumn dataField='outcome'>Outcome</TableHeaderColumn>

    </BootstrapTable>
  )
}








export default CrimeChartList;

