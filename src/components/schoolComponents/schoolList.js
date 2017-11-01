import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import schoolData from "./schoolData";

const phases = schoolData.map(phase => phase.phase).reduce((acc, phases) => {
  if (!(phases in acc)) acc[phases] = phases;
  return acc;
}, {});

class SchoolChartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: ""
    };
  }

  render() {
    return (
      <BootstrapTable
        data={this.props.data}
        striped={true}
        hover={true}
        condensed={true}
        pagination={true}
      >
        <TableHeaderColumn
          isKey
          dataField="phase"
          filter={{ type: "SelectFilter", options: phases }}
          width="182"
          dataAlign="center"
        >
          Education
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="name"
          dataSort
          width="247"
          dataAlign="center"
        >
          School{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
        <TableHeaderColumn dataField="pupils" width="80" dataAlign="center">
          Pupils
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="studyProg"
          dataSort
          width="91"
          dataAlign="center"
        >
          Study Program{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="earlyYears"
          dataSort
          width="98"
          dataAlign="center"
        >
          Early years provision{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="outcomes"
          dataSort
          width="95"
          dataAlign="center"
        >
          Outcome for pupils{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="quality"
          dataSort
          width="117"
          dataAlign="center"
        >
          Quality of teaching, learning and assessment{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="personalDev"
          dataSort
          width="119"
          dataAlign="center"
        >
          Personal developlent, behaviour and welfare{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="totalScore"
          dataSort
          width="80"
          dataAlign="center"
        >
          Overall Rating{<i className="fa fa-sort" aria-hidden="true" />}
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default SchoolChartList;
