import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import dummy from "./graphDataDummy";
import "./crimeList.css";

const crimeTypes = dummy
  .map(crime => crime.crimeType)
  .reduce((acc, crimeType) => {
    if (!(crimeType in acc)) acc[crimeType] = crimeType;
    return acc;
  }, {});

const CrimeChartList = props => {
  return (
    <div>
      <BootstrapTable
        data={dummy}
        striped={true}
        hover={true}
        condensed={true}
        pagination={true}
      >
        <TableHeaderColumn
          isKey
          dataField="crimeType"
          filter={{ type: "SelectFilter", options: crimeTypes }}
          width="300"
        >
          Crime Type{" "}
        </TableHeaderColumn>
        <TableHeaderColumn dataField="streetName" width="300">
          Street Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="month" width="90">
          Date
        </TableHeaderColumn>
        <TableHeaderColumn dataField="outcome">Outcome</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

export default CrimeChartList;

//search={true} multiColumnSearch={true}
