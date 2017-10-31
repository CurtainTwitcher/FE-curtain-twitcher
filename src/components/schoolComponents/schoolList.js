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
    this.arrowFinder = this.arrowFinder.bind(this);
  }

  arrowFinder(cell, row) {
    // console.log("cell", cell);
    // console.log("row", row);
    // for (let i = 0; i < schoolData.length; i++) {
    //   if (schoolData[i].totalScore < schoolData[i].prevTotalScore) {
    //     console.log("hello");
    //     return `<i class="fa fa-arrow-up" aria-hidden="true" /> ${cell}`;
    //   } else return null;
    // }
    let arrow;
    schoolData.forEach(eachSchool => {
      if (eachSchool.totalScore <= eachSchool.prevTotalScore) {
        arrow = `${cell} <i class="fa fa-arrow-up" aria-hidden="true" /> `;
      } else if (eachSchool.totalScore >= eachSchool.prevTotalScore) {
        arrow = `${cell} <i class="fa fa-arrow-down" aria-hidden="true" /> `;
      } else if (eachSchool.totalScore === eachSchool.prevTotalScore) {
        arrow = `${cell} <i class="fa fa-arrows-h" aria-hidden="true" /> `;
      }
    });
    return arrow;
    // return `<i class="fa fa-arrow-up" aria-hidden="true" /> ${cell}`;
  }

  render() {
    return (
      <BootstrapTable
        data={schoolData}
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
        >
          Education
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="247">
          School
        </TableHeaderColumn>
        <TableHeaderColumn dataField="pupils" width="80">
          Pupils
        </TableHeaderColumn>
        <TableHeaderColumn dataField="studyProg" width="91">
          Study Program
        </TableHeaderColumn>
        <TableHeaderColumn dataField="earlyYears" width="98">
          Early years provision
        </TableHeaderColumn>
        <TableHeaderColumn dataField="outcomes" width="95">
          Outcome for pupils
        </TableHeaderColumn>
        <TableHeaderColumn dataField="quality" width="117">
          Quality of teaching, learning and assessment
        </TableHeaderColumn>
        <TableHeaderColumn dataField="personalDev" width="119">
          Personal developlent, behaviour and welfare
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="totalScore"
          dataFormat={this.arrowFinder}
          dataSort
          width="80"
        >
          {console.log(this.arrowFinder())}
          Overall Rating
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default SchoolChartList;
