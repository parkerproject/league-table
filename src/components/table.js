import React from 'react';

const data = [
  { name: 'Kirkland & Ellis LLP',
    rank: 1,
  },
  { name: 'Paul, Weiss, Rifkind, Wharton & Garrison LLP',
    rank: 2,
  },
  { name: 'Latham & Watkins LLP',
    rank: 3,
  },
  { name: 'Weil, Gotshal & Manges LLP',
    rank: 4,
  },
  { name: 'Jones Day',
    rank: 5,
  },
  { name: 'DLA Piper',
    rank: 6,
  },
  { name: 'Simpson Thacher & Bartlett LLP',
    rank: 7,
  },
  { name: 'Skadden, Arps, Slate, Meagher & Flom LLP',
    rank: 8,
  },
  { name: 'White & Case LLP',
    rank: 9,
  },
  { name: 'Morgan, Lewis & Bockius LLP',
    rank: 10,
  },
  { name: 'Sidley Austin LLP',
    rank: 11,
  },
  { name: 'Willkie Farr & Gallagher LLP',
    rank: 12,
  },
  { name: 'Hogan Lovells',
    rank: 13,
  },
  { name: 'Stikeman Elliott LLP',
    rank: 14,
  },
  { name: 'Freshfields Bruckhaus Deringer LLP',
    rank: 15,
  },
  { name: 'Goodwin Procter LLP',
    rank: 16,
  },
  { name: 'Sullivan & Cromwell LLP',
    rank: 17,
  },
  { name: 'Akin Gump Strauss Hauer & Feld LLP',
    rank: 18,
  },
  { name: 'Clifford Chance LLP',
    rank: 19,
  },
  { name: 'Dechert LLP',
    rank: 20,
  },
];


const tableStyles = {
  table: {
    borderCollapse: 'collapse',
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
};

function Table() {
  return (
    <div>
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Rank</th>
            <th style={tableStyles.th}>Bank</th>
          </tr>
        </thead>
        <tbody>
          {data.map(s => (
            <tr>
              <td style={tableStyles.td}>{s.rank}</td>
              <td style={tableStyles.td}>{s.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
