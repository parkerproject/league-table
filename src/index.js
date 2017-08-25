/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

/*
league table types
1. bankruptcy
2. out of court
3. ma
4. private equity
*/

const leagueTable = document.getElementById('league_table');
const typeOfLeagueTabe = leagueTable.getAttribute('data-league-type');

ReactDOM.render(<App type={typeOfLeagueTabe} />, leagueTable);
registerServiceWorker();
