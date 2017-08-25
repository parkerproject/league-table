import React from 'react';
import PropTypes from 'prop-types';
import Bankruptcy from './bankruptcy';
import OutOfCourt from './out_of_court';
import PrivateEquity from './pe';
import MergerAquisition from './ma';

function App(props) {
  if (props.type === 'br') {
    return <Bankruptcy />;
  }

  if (props.type === 'oc') {
    return <OutOfCourt />;
  }

  if (props.type === 'pe') {
    return <PrivateEquity />;
  }

  if (props.type === 'ma') {
    return <MergerAquisition />;
  }
}

App.propTypes = {
  type: PropTypes.string.isRequired,
};

export default App;
