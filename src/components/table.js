import React from 'react';
import PropTypes from 'prop-types';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const tableStyles = {
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    fontSize: 13,
  },

  th: {
    textAlign: 'left',
    padding: '5px',
    border: '1px solid black',
  },

  td: {
    border: '1px solid black',
    padding: '3px',
  },
  header: {
    background: 'black',
    color: 'white',
    padding: 5,
    textTransform: 'uppercase',
    fontSize: 13,
  },
};


function Table(props) {
  const data = props.data;

  // if (props.type === 'volume') {
  //   data = orderBy(data, ['AMOUNT'], ['desc']);
  //   const e = groupBy(data, 'AMOUNT');
  //   console.log(e[Object.keys(e)[0]]);
  // }

  return (
    <div>
      <div style={tableStyles.header}>{props.title}</div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: props.title,
            columns: [{
              Header: 'Rank',
              accessor: 'AMOUNT',
            },
            {
              Header: 'Adviser',
              accessor: 'COMPANY',
            },
            ],
          },
        ]}
        defaultPageSize={10}
        showPageSizeOptions={false}
        className="-striped -highlight"
        style={{ fontSize: 12 }}
      />
      {/* <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Rank</th>
            <th style={tableStyles.th}>Bank</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, key) => (
            <tr>
              <td style={tableStyles.td}>{key} ({s.AMOUNT})</td>
              <td style={tableStyles.td}>{s.COMPANY}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

Table.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Table;
