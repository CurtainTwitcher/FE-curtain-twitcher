import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import dummy from "./graphDataDummy";

const CrimeChartList = props => {
  return (
    <BootstrapTable data={dummy} search={true} multiColumnSearch={true}>
      <TableHeaderColumn isKey dataField="crimeType">
        Crime Type{" "}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="streetName">Street Name</TableHeaderColumn>
      <TableHeaderColumn dataField="month">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="outcome">Outcome</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default CrimeChartList;
