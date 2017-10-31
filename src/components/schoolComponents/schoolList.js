import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import schoolData from "./schoolData";

const newObj = {}
const phases = schoolData
    .map(phase => phase.phase)
    .reduce((acc, phases) => {
      if (!(phases in acc)) acc[phases] = phases;
      return acc;
    }, {})


const SchoolChartList = props => {
  return (
    <div>
    <BootstrapTable data={schoolData}  striped={true} hover={true} condensed= {true} pagination={true} >
    <TableHeaderColumn isKey dataField="crimeType" filter={ { type: 'SelectFilter', options: phases }} width='300'>Education{" "}</TableHeaderColumn>
      <TableHeaderColumn dataField="streetName" width='300'>Street Name</TableHeaderColumn>
      <TableHeaderColumn dataField="month" width='90'>Date</TableHeaderColumn>
      <TableHeaderColumn dataField="outcome">Outcome</TableHeaderColumn>
    </BootstrapTable>
    </div>
  );
};

export default SchoolChartList;

