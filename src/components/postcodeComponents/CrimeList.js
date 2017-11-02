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

class CrimeChartList extends React.Component {
  constructor(props) {
    super(props);
    this.afterColumnFilter = this.afterColumnFilter.bind(this);
  }

  afterColumnFilter(filterConds, result) {
    if (filterConds === null) return;
    if (filterConds.crimeType.value !== this.props.crimeType) {
      this.props.filterCrimeTypes(filterConds.crimeType.value);
    }
  }

  render() {
    const options = {
      afterColumnFilter: this.afterColumnFilter
    };
    return (
      <div className="crimeTable">
        <BootstrapTable
          data={this.props.data}
          options={options}
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
            Crime Type
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
  }
}

export default CrimeChartList;

//search={true} multiColumnSearch={true}
