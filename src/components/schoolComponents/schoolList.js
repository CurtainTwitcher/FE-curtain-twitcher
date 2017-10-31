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
    
    <BootstrapTable data={schoolData}  striped={true} hover={true} condensed= {true} pagination={true} >
    <TableHeaderColumn isKey dataField="phase" filter={ { type: 'SelectFilter', options: phases }} width='182'>Education{" "}</TableHeaderColumn>
      <TableHeaderColumn dataField="name" width='247'>School</TableHeaderColumn>
      <TableHeaderColumn dataField="pupils" width='80'>Pupils</TableHeaderColumn>
      <TableHeaderColumn dataField="studyProg" width='91'>Study Program</TableHeaderColumn>
      <TableHeaderColumn dataField="earlyYears" width='98'>Early years provision</TableHeaderColumn>
      <TableHeaderColumn dataField="outcomes" width='95'>Outcome for pupils</TableHeaderColumn>
      <TableHeaderColumn dataField="quality" width='117'>Quality of teaching, learning and assessment</TableHeaderColumn>
      <TableHeaderColumn dataField="personalDev" width='119'>Personal developlent, behaviour and welfare</TableHeaderColumn>
      <TableHeaderColumn dataField="totalScore" width='80'>Overall Rating</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default SchoolChartList;

