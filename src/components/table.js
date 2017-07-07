import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function Table(props) {
  const data = [{
    rank: 1,
    bank: 'PJB Partners Inc',
  }, {
  }];

  const columns = [{
    Header: 'Rank',
    accessor: 'rank', // String-based value accessors!
    Cell: props => <span className="number">{props.value}</span>,
  }, {
    Header: 'Bank',
    accessor: 'bank',
  }];
  return (
    <ReactTable
      data={data}
      columns={columns}
      className="league_table"
    />
  );
}

export default Table;
